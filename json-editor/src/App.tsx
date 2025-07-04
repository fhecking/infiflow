import { useState } from 'react';
import JsonEditor from './components/JsonEditor';
import JsonOutput from './components/JsonOutput';
import WorkflowList from './components/WorkflowList';
import { WorkflowProvider } from "./context/WorkflowContext";

const App = () => {
  const [jsonInput, setJsonInput] = useState<string>('');
  const [formattedJson, setFormattedJson] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [selectedWorkflow, setSelectedWorkflow] = useState<any>(null);

  const handleJsonChange = (value: string) => {
    setJsonInput(value);
    try {
      const parsed = JSON.parse(value);
      setFormattedJson(parsed);
      setError('');
    } catch {
      setFormattedJson('');
      setError('Invalid JSON format');
    }
  };

  const handleWorkflowSelect = (workflow: any) => {
    setSelectedWorkflow(workflow);
  };

  const handleJsonSelect = (jsonObj: any) => {
    const jsonStr = JSON.stringify(jsonObj, null, 2);
    setJsonInput(jsonStr);
    setFormattedJson(jsonObj);
    setError('');
  };

  return (
    <WorkflowProvider>
    <div>
      <h1>JSON Editor</h1>
      <WorkflowList onSelectWorkflow={handleWorkflowSelect} />
      {selectedWorkflow && selectedWorkflow.jsons && (
        <div>
          <h2>JSONs for {selectedWorkflow.name}</h2>
          <ul>
            {selectedWorkflow.jsons.map((json: any) => (
              <li key={json.id}>
                <button onClick={() => handleJsonSelect(json.data)}>
                  {json.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <JsonEditor value={jsonInput} onJsonChange={handleJsonChange} error={error} />
      <JsonOutput jsonData={formattedJson} />
    </div>
  </WorkflowProvider>


  );
};


export default App;