import type { Workflow } from "../types";

const URL: string = "http://localhost:3000/api/v1/workflow";


export const fetchWorkflows = async (): Promise<Workflow[]> => {
  const res = await fetch(`${URL}`);
  const data = await res.json();
  return data.workflows;
};

export const fetchWorkflowById = async (id: string): Promise<Workflow> => {
  const res = await fetch(`${URL}/${id}`);
  return await res.json();
};