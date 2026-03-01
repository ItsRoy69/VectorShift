// databaseNode.js

import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const config = {
    title: 'Database',
    description: 'Execute database queries',
    fields: [
      {
        name: 'dbType',
        type: 'select',
        label: 'Database Type',
        defaultValue: 'postgresql',
        options: [
          { value: 'postgresql', label: 'PostgreSQL' },
          { value: 'mysql', label: 'MySQL' },
          { value: 'mongodb', label: 'MongoDB' },
          { value: 'sqlite', label: 'SQLite' },
          { value: 'redis', label: 'Redis' }
        ]
      },
      {
        name: 'connectionString',
        type: 'text',
        label: 'Connection String',
        defaultValue: '',
        placeholder: 'Database connection string'
      },
      {
        name: 'query',
        type: 'textarea',
        label: 'Query',
        defaultValue: '',
        placeholder: 'SELECT * FROM table WHERE id = {{id}}'
      },
      {
        name: 'timeout',
        type: 'number',
        label: 'Query Timeout (seconds)',
        defaultValue: 30,
        min: 5,
        max: 300,
        step: 5
      }
    ],
    inputs: [
      { id: 'params', label: 'Parameters', top: '33%' },
      { id: 'trigger', label: 'Trigger', top: '67%' }
    ],
    outputs: [
      { id: 'results', label: 'Results', top: '25%' },
      { id: 'rowCount', label: 'Row Count', top: '50%' },
      { id: 'error', label: 'Error', top: '75%' }
    ],
    style: {
      borderColor: '#0ea5e9',
      minWidth: 250
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
