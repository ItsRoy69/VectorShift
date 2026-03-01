// jsonNode.js

import { BaseNode } from './BaseNode';

export const JsonNode = ({ id, data }) => {
  const config = {
    title: 'JSON',
    description: 'Parse and manipulate JSON',
    fields: [
      {
        name: 'operation',
        type: 'select',
        label: 'Operation',
        defaultValue: 'parse',
        options: [
          { value: 'parse', label: 'Parse JSON' },
          { value: 'stringify', label: 'Stringify' },
          { value: 'extract', label: 'Extract Path' },
          { value: 'merge', label: 'Merge Objects' },
          { value: 'validate', label: 'Validate Schema' }
        ]
      },
      {
        name: 'path',
        type: 'text',
        label: 'JSON Path',
        defaultValue: '',
        placeholder: '$.data.items[0].name'
      },
      {
        name: 'prettyPrint',
        type: 'checkbox',
        label: 'Pretty Print',
        defaultValue: true
      },
      {
        name: 'schema',
        type: 'textarea',
        label: 'Schema',
        defaultValue: '',
        placeholder: 'JSON Schema for validation'
      }
    ],
    inputs: [
      { id: 'input', label: 'Input', top: '33%' },
      { id: 'schema', label: 'Schema', top: '67%' }
    ],
    outputs: [
      { id: 'output', label: 'Output', top: '25%' },
      { id: 'valid', label: 'Valid', top: '50%' },
      { id: 'error', label: 'Error', top: '75%' }
    ],
    style: {
      borderColor: '#eab308',
      minWidth: 240
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
