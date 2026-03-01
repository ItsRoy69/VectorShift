// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const config = {
    title: 'LLM',
    description: 'Large Language Model',
    inputs: [
      { id: 'system', label: 'System', top: '33%' },
      { id: 'prompt', label: 'Prompt', top: '67%' }
    ],
    outputs: [
      { id: 'response', label: 'Response' }
    ],
    fields: [
      {
        name: 'model',
        type: 'select',
        label: 'Model',
        defaultValue: 'gpt-3.5-turbo',
        options: [
          { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo' },
          { value: 'gpt-4', label: 'GPT-4' },
          { value: 'gpt-4-turbo', label: 'GPT-4 Turbo' }
        ]
      }
    ],
    style: {
      borderColor: '#8b5cf6',
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
