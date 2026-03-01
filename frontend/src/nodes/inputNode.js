// inputNode.js

import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const config = {
    title: 'Input',
    fields: [
      {
        name: 'inputName',
        type: 'text',
        label: 'Name',
        defaultValue: id.replace('customInput-', 'input_'),
        placeholder: 'Enter input name'
      },
      {
        name: 'inputType',
        type: 'select',
        label: 'Type',
        defaultValue: 'Text',
        options: [
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'File' }
        ]
      }
    ],
    outputs: [
      { id: 'value', label: 'Output' }
    ],
    style: {
      borderColor: '#10b981',
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
