import React from 'react';

interface JsonOutputProps {
    jsonData: object;
}

const JsonOutput: React.FC<JsonOutputProps> = ({ jsonData }) => {
    return (
        <div>
            <h2>Formatted JSON Output</h2>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
    );
};

export default JsonOutput;