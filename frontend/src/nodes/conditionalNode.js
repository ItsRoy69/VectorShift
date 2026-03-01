// conditionalNode.js

import { BaseNode } from './BaseNode';

export const ConditionalNode = ({ id, data }) => {
  const config = {
    title: 'Conditional',
    description: 'Route data based on conditions',
    fields: [
      {
        name: 'operator',
        type: 'select',
        label: 'Operator',
        defaultValue: '==',
        options: [
          { value: '==', label: 'Equal' },
          { value: '!=', label: 'Not Equal' },
          { value: '>', label: 'Greater Than' },
          { value: '<', label: 'Less Than' },
          { value: '>=', label: 'Greater or Equal' },
          { value: '<=', label: 'Less or Equal' }
        ]
      },
      {
        name: 'threshold',
        type: 'text',
        label: 'Threshold',
        defaultValue: '',
        placeholder: 'Comparison value'
      }
    ],
    inputs: [
      { id: 'input', label: 'Input' }
    ],
    outputs: [
      { id: 'true', label: 'True', top: '33%' },
      { id: 'false', label: 'False', top: '67%' }
    ],
    style: {
      borderColor: '#f97316',
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
