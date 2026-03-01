// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const { nodes, edges } = useStore(state => ({
        nodes: state.nodes,
        edges: state.edges
    }));

    const handleSubmit = async () => {
        try {
            const pipelineData = {
                nodes: nodes,
                edges: edges
            };

            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pipelineData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit pipeline');
            }

            const result = await response.json();
            
            // Display results in a user-friendly alert
            alert(
                `Pipeline Analysis Results:\n\n` +
                `Number of Nodes: ${result.num_nodes}\n` +
                `Number of Edges: ${result.num_edges}\n` +
                `Is Valid DAG: ${result.is_dag ? 'Yes ✓' : 'No ✗'}\n\n` +
                (result.is_dag 
                    ? 'Your pipeline is a valid Directed Acyclic Graph!' 
                    : 'Warning: Your pipeline contains cycles or is not a valid DAG.')
            );
        } catch (error) {
            alert(`Error: ${error.message}\n\nMake sure the backend server is running on http://127.0.0.1:8000`);
        }
    };

    return (
        <div style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '16px',
            backgroundColor: '#f8fafc',
            borderTop: '2px solid #e2e8f0',
            boxShadow: '0 -2px 4px rgba(0,0,0,0.05)'
        }}>
            <button 
                type="button"
                onClick={handleSubmit}
                style={{
                    padding: '12px 32px',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#ffffff',
                    backgroundColor: '#6366f1',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(99, 102, 241, 0.3)',
                    transition: 'all 0.2s',
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#4f46e5';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 4px 8px rgba(99, 102, 241, 0.4)';
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#6366f1';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 2px 4px rgba(99, 102, 241, 0.3)';
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
}
