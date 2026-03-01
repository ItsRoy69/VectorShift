// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ 
            padding: '20px', 
            backgroundColor: '#f8fafc',
            borderBottom: '2px solid #e2e8f0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
            <h2 style={{
                margin: '0 0 16px 0',
                fontSize: '20px',
                fontWeight: '600',
                color: '#1e293b'
            }}>Pipeline Nodes</h2>
            <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                gap: '12px',
                maxWidth: '1200px'
            }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='aggregate' label='Aggregate' />
                <DraggableNode type='conditional' label='Conditional' />
                <DraggableNode type='api' label='API Call' />
            </div>
        </div>
    );
};
