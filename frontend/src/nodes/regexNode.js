// regexNode.js

import { BaseNode } from './BaseNode';

export const RegexNode = ({ id, data }) => {
  const config = {
    title: 'Regex',
    description: 'Pattern matching and extraction',
    fields: [
      {
        name: 'operation',
        type: 'select',
        label: 'Operation',
        defaultValue: 'match',
        options: [
          { value: 'match', label: 'Match' },
          { value: 'replace', label: 'Replace' },
          { value: 'extract', label: 'Extract Groups' },
          { value: 'split', label: 'Split' },
          { value: 'test', label: 'Test Pattern' }
        ]
      },
      {
        name: 'pattern',
        type: 'text',
        label: 'Regex Pattern',
        defaultValue: '',
        placeholder: 'Regular expression pattern'
      },
      {
        name: 'replacement',
        type: 'text',
        label: 'Replacement',
        defaultValue: '',
        placeholder: 'Replacement string'
      },
      {
        name: 'flags',
        type: 'text',
        label: 'Flags',
        defaultValue: 'g',
        placeholder: 'g, i, m, s, u, y'
      },
      {
        name: 'caseInsensitive',
        type: 'checkbox',
        label: 'Case Insensitive',
        defaultValue: false
      }
    ],
    inputs: [
      { id: 'text', label: 'Text Input' }
    ],
    outputs: [
      { id: 'result', label: 'Result', top: '25%' },
      { id: 'matches', label: 'Matches', top: '50%' },
      { id: 'groups', label: 'Groups', top: '75%' }
    ],
    style: {
      borderColor: '#a855f7',
      minWidth: 230
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
