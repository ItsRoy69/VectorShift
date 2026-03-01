// outputNode.js

import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const config = {
    title: 'Output',
    fields: [
      {
        name: 'outputName',
        type: 'text',
        label: 'Name',
        defaultValue: id.replace('customOutput-', 'output_'),
        placeholder: 'Enter output name'
      },
      {
        name: 'outputType',
        type: 'select',
        label: 'Type',
        defaultValue: 'Text',
        options: [
          { value: 'Text', label: 'Text' },
          { value: 'Image', label: 'Image' }
        ]
      }
    ],
    inputs: [
      { id: 'value', label: 'Input' }
    ],
    style: {
      borderColor: '#ef4444',
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
