export interface JsonInput {
    [key: string]: any;
}

export interface WorkflowJson {
  id: string;
  name: string;
  data: Record<string, unknown>;
}

export interface Workflow {
  id: string;
  name: string;
  jsons: WorkflowJson[];
}

export interface JsonOutputProps {
    jsonData: JsonInput;
}