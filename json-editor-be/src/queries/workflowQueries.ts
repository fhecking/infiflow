import pool from '../db/pool';
import { WorkflowDto } from '../dto/workflowDto';

export const getWorkflowByIdQuery = async (id: string): Promise<WorkflowDto | null> => {
  const result = await pool.query('SELECT id, name FROM workflow WHERE id = $1', [id]);
  if (result.rows.length === 0) return null;
  // jsons will be added in the controller after fetching from json_data
  return {
    id: result.rows[0].id,
    name: result.rows[0].name,
    jsons: []
  };
};

export const listWorkflowsQuery = async (): Promise<WorkflowDto[]> => {
  const result = await pool.query('SELECT id, name FROM workflow');
  // jsons will be added in the controller if needed
  return result.rows.map((row) => ({
    id: row.id,
    name: row.name,
    jsons: []
  }));
};