// BaseNode.js
// Flexible node abstraction that can be configured for any node type

import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

/**
 * BaseNode - A flexible abstraction for creating different node types
 * 
 * @param {string} id - Unique node identifier
 * @param {object} data - Node data
 * @param {object} config - Node configuration object
 * @param {string} config.title - Title displayed at the top of the node
 * @param {string} config.description - Optional description text
 * @param {array} config.inputs - Array of input handles [{id, label, position}]
 * @param {array} config.outputs - Array of output handles [{id, label, position}]
 * @param {array} config.fields - Array of field configurations [{name, type, label, options, defaultValue}]
 * @param {object} config.style - Custom styling for the node
 * @param {function} config.onFieldChange - Callback for field changes
 */
export const BaseNode = ({ id, data, config }) => {
  const [fieldValues, setFieldValues] = useState(() => {
    const initialValues = {};
    config.fields?.forEach(field => {
      initialValues[field.name] = data?.[field.name] || field.defaultValue || '';
    });
    return initialValues;
  });

  const handleFieldChange = (fieldName, value) => {
    setFieldValues(prev => ({ ...prev, [fieldName]: value }));
    if (config.onFieldChange) {
      config.onFieldChange(id, fieldName, value);
    }
  };

  const defaultStyle = {
    minWidth: 200,
    minHeight: 80,
    border: '2px solid #6366f1',
    borderRadius: '12px',
    padding: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    ...config.style
  };

  const headerStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '8px',
    paddingBottom: '8px',
    borderBottom: '1px solid #e2e8f0'
  };

  const descriptionStyle = {
    fontSize: '12px',
    color: '#64748b',
    marginBottom: '8px'
  };

  const fieldContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };

  const labelStyle = {
    fontSize: '12px',
    color: '#475569',
    fontWeight: '500',
    marginBottom: '4px',
    display: 'block'
  };

  const inputStyle = {
    width: '100%',
    padding: '6px 8px',
    fontSize: '12px',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const selectStyle = {
    ...inputStyle,
    backgroundColor: '#ffffff',
    cursor: 'pointer'
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '60px',
    fontFamily: 'inherit'
  };

  const renderField = (field) => {
    const value = fieldValues[field.name] || '';

    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            style={inputStyle}
            placeholder={field.placeholder}
          />
        );
      case 'textarea':
        return (
          <textarea
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            style={textareaStyle}
            placeholder={field.placeholder}
          />
        );
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            style={selectStyle}
          >
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'number':
        return (
          <input
            type="number"
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            style={inputStyle}
            min={field.min}
            max={field.max}
            step={field.step}
          />
        );
      case 'checkbox':
        return (
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => handleFieldChange(field.name, e.target.checked)}
            style={{ width: 'auto' }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div style={defaultStyle}>
      {/* Input Handles */}
      {config.inputs?.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={input.position || Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: input.top || `${((index + 1) * 100) / (config.inputs.length + 1)}%`,
            background: '#6366f1',
            width: '10px',
            height: '10px',
            ...input.style
          }}
        />
      ))}

      {/* Header */}
      <div style={headerStyle}>
        {config.title}
      </div>

      {/* Description */}
      {config.description && (
        <div style={descriptionStyle}>
          {config.description}
        </div>
      )}

      {/* Fields */}
      {config.fields && config.fields.length > 0 && (
        <div style={fieldContainerStyle}>
          {config.fields.map(field => (
            <label key={field.name} style={{ display: 'block' }}>
              <span style={labelStyle}>{field.label}</span>
              {renderField(field)}
            </label>
          ))}
        </div>
      )}

      {/* Output Handles */}
      {config.outputs?.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={output.position || Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: output.top || `${((index + 1) * 100) / (config.outputs.length + 1)}%`,
            background: '#6366f1',
            width: '10px',
            height: '10px',
            ...output.style
          }}
        />
      ))}
    </div>
  );
};
