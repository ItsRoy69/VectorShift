// textNode.js

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [dimensions, setDimensions] = useState({ width: 200, height: 'auto' });
  const textareaRef = useRef(null);

  // Extract variables from text (e.g., {{variable}})
  const extractVariables = (text) => {
    const regex = /\{\{(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*)\}\}/g;
    const variables = [];
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      const varName = match[1].trim();
      if (!variables.includes(varName)) {
        variables.push(varName);
      }
    }
    
    return variables;
  };

  const variables = extractVariables(currText);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
      
      // Calculate width based on text length
      const textLength = currText.length;
      const newWidth = Math.max(200, Math.min(400, 200 + textLength * 2));
      setDimensions({ width: newWidth, height: 'auto' });
    }
  }, [currText]);

  const nodeStyle = {
    width: dimensions.width,
    minHeight: 120,
    border: '2px solid #f59e0b',
    borderRadius: '12px',
    padding: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '8px',
    paddingBottom: '8px',
    borderBottom: '1px solid #e2e8f0'
  };

  const labelStyle = {
    fontSize: '12px',
    color: '#475569',
    fontWeight: '500',
    marginBottom: '4px',
    display: 'block'
  };

  const textareaStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '12px',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    outline: 'none',
    resize: 'none',
    fontFamily: 'monospace',
    minHeight: '60px',
    overflow: 'hidden'
  };

  return (
    <div style={nodeStyle}>
      {/* Dynamic input handles for variables */}
      {variables.map((variable, index) => (
        <Handle
          key={`var-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${((index + 1) * 100) / (variables.length + 1)}%`,
            background: '#f59e0b',
            width: '10px',
            height: '10px',
          }}
        />
      ))}

      <div style={headerStyle}>
        Text
      </div>

      <label style={{ display: 'block' }}>
        <span style={labelStyle}>Text</span>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={textareaStyle}
          placeholder="Enter text with variables like {{variable}}"
        />
      </label>

      {variables.length > 0 && (
        <div style={{ fontSize: '10px', color: '#64748b', marginTop: '4px' }}>
          Variables: {variables.join(', ')}
        </div>
      )}

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          background: '#f59e0b',
          width: '10px',
          height: '10px',
        }}
      />
    </div>
  );
}
