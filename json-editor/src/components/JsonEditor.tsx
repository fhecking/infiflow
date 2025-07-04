import React, { useState } from 'react';

interface JsonEditorProps {
  value: string;
  onJsonChange: (value: string) => void;
  error?: string;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ value, onJsonChange, error }) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={e => onJsonChange(e.target.value)}
        placeholder="Enter JSON here"
        rows={10}
        cols={50}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default JsonEditor;