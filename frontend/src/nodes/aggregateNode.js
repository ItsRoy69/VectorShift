// aggregateNode.js

import { BaseNode } from './BaseNode';

export const AggregateNode = ({ id, data }) => {
  const config = {
    title: 'Aggregate',
    description: 'Aggregate multiple inputs',
    fields: [
      {
        name: 'operation',
        type: 'select',
        label: 'Operation',
        defaultValue: 'concat',
        options: [
          { value: 'concat', label: 'Concatenate' },
          { value: 'sum', label: 'Sum' },
          { value: 'average', label: 'Average' },
          { value: 'max', label: 'Maximum' },
          { value: 'min', label: 'Minimum' }
        ]
      },
      {
        name: 'separator',
        type: 'text',
        label: 'Separator',
        defaultValue: ', ',
        placeholder: 'Separator for concat'
      }
    ],
    inputs: [
      { id: 'input1', label: 'Input 1', top: '25%' },
      { id: 'input2', label: 'Input 2', top: '50%' },
      { id: 'input3', label: 'Input 3', top: '75%' }
    ],
    outputs: [
      { id: 'result', label: 'Result' }
    ],
    style: {
      borderColor: '#14b8a6',
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
