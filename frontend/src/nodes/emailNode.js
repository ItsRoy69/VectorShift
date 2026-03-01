// emailNode.js

import { BaseNode } from './BaseNode';

export const EmailNode = ({ id, data }) => {
  const config = {
    title: 'Email',
    description: 'Send email notifications',
    fields: [
      {
        name: 'provider',
        type: 'select',
        label: 'Email Provider',
        defaultValue: 'smtp',
        options: [
          { value: 'smtp', label: 'SMTP' },
          { value: 'sendgrid', label: 'SendGrid' },
          { value: 'mailgun', label: 'Mailgun' },
          { value: 'ses', label: 'AWS SES' }
        ]
      },
      {
        name: 'to',
        type: 'text',
        label: 'To',
        defaultValue: '',
        placeholder: 'recipient@example.com'
      },
      {
        name: 'subject',
        type: 'text',
        label: 'Subject',
        defaultValue: '',
        placeholder: 'Email subject'
      },
      {
        name: 'includeTimestamp',
        type: 'checkbox',
        label: 'Include Timestamp',
        defaultValue: true
      }
    ],
    inputs: [
      { id: 'body', label: 'Body', top: '40%' },
      { id: 'attachments', label: 'Attachments', top: '70%' }
    ],
    outputs: [
      { id: 'success', label: 'Success', top: '33%' },
      { id: 'messageId', label: 'Message ID', top: '67%' }
    ],
    style: {
      borderColor: '#d946ef',
      minWidth: 240
    }
  };

  return <BaseNode id={id} data={data} config={config} />;
}
