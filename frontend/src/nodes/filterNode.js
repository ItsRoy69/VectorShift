// filterNode.js

import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const config = {
    title: 'Filter',
    description: 'Filter data based on conditions',
    fields: [
      {
        name: 'condition',
        type: 'select',
        label: 'Condition',
        defaultValue: 'contains',
        options: [
          { value: 'contains', label: 'Contains' },
          { value: 'equals', label: 'Equals' },
          { value: 'greater', label: 'Greater Than' },
          { value: 'less', label: 'Less Than' },
          { value: 'notEmpty', label: 'Not Empty' }
        ]
      },
      {
        name: 'value',
        type: 'text',
        label: 'Value',
        defaultValue: '',
        placeholder: 'Comparison value'
      }
    ],
    inputs: [
      { id: 'input', label: 'Input' }
    ],
    outputs: [
      { id: 'passed', label: 'Passed', top: '33%' },
      { id: 'failed', label: 'Failed', top: '67%' }
    ],
    style: {
      borderColor: '#ec4899',
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
