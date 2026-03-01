// apiNode.js

import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const config = {
    title: 'API Call',
    description: 'Make HTTP API requests',
    fields: [
      {
        name: 'method',
        type: 'select',
        label: 'Method',
        defaultValue: 'GET',
        options: [
          { value: 'GET', label: 'GET' },
          { value: 'POST', label: 'POST' },
          { value: 'PUT', label: 'PUT' },
          { value: 'DELETE', label: 'DELETE' },
          { value: 'PATCH', label: 'PATCH' }
        ]
      },
      {
        name: 'url',
        type: 'text',
        label: 'URL',
        defaultValue: '',
        placeholder: 'https://api.example.com/endpoint'
      },
      {
        name: 'timeout',
        type: 'number',
        label: 'Timeout (ms)',
        defaultValue: 5000,
        min: 1000,
        max: 30000,
        step: 1000
      }
    ],
    inputs: [
      { id: 'body', label: 'Body', top: '33%' },
      { id: 'headers', label: 'Headers', top: '67%' }
    ],
    outputs: [
      { id: 'response', label: 'Response', top: '33%' },
      { id: 'error', label: 'Error', top: '67%' }
    ],
    style: {
      borderColor: '#3b82f6',
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
