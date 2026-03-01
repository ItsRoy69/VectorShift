// transformNode.js

import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const config = {
    title: 'Transform',
    description: 'Transform data using operations',
    fields: [
      {
        name: 'operation',
        type: 'select',
        label: 'Operation',
        defaultValue: 'uppercase',
        options: [
          { value: 'uppercase', label: 'To Uppercase' },
          { value: 'lowercase', label: 'To Lowercase' },
          { value: 'trim', label: 'Trim Whitespace' },
          { value: 'reverse', label: 'Reverse' },
          { value: 'length', label: 'Get Length' }
        ]
      }
    ],
    inputs: [
      { id: 'input', label: 'Input' }
    ],
    outputs: [
      { id: 'output', label: 'Output' }
    ],
    style: {
      borderColor: '#06b6d4',
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
