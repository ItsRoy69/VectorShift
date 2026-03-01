// dateTimeNode.js

import { BaseNode } from './BaseNode';

export const DateTimeNode = ({ id, data }) => {
  const config = {
    title: 'DateTime',
    description: 'Date and time operations',
    fields: [
      {
        name: 'operation',
        type: 'select',
        label: 'Operation',
        defaultValue: 'format',
        options: [
          { value: 'format', label: 'Format Date' },
          { value: 'add', label: 'Add Time' },
          { value: 'subtract', label: 'Subtract Time' },
          { value: 'diff', label: 'Calculate Difference' },
          { value: 'parse', label: 'Parse Date' },
          { value: 'now', label: 'Current DateTime' }
        ]
      },
      {
        name: 'format',
        type: 'text',
        label: 'Format String',
        defaultValue: 'YYYY-MM-DD HH:mm:ss',
        placeholder: 'Date format pattern'
      },
      {
        name: 'amount',
        type: 'number',
        label: 'Amount',
        defaultValue: 0,
        min: -1000,
        max: 1000,
        step: 1
      },
      {
        name: 'unit',
        type: 'select',
        label: 'Unit',
        defaultValue: 'days',
        options: [
          { value: 'seconds', label: 'Seconds' },
          { value: 'minutes', label: 'Minutes' },
          { value: 'hours', label: 'Hours' },
          { value: 'days', label: 'Days' },
          { value: 'months', label: 'Months' },
          { value: 'years', label: 'Years' }
        ]
      }
    ],
    inputs: [
      { id: 'date', label: 'Date Input' }
    ],
    outputs: [
      { id: 'result', label: 'Result', top: '33%' },
      { id: 'timestamp', label: 'Timestamp', top: '67%' }
    ],
    style: {
      borderColor: '#84cc16',
      minWidth: 220
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
