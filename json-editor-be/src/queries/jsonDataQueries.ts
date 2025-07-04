import pool from '../db/pool';
import { JsonDataDto } from '../dto/workflowDto';

export const getJsonsByWorkflowIdQuery = async (id_wf: string): Promise<JsonDataDto[]> => {
  const result = await pool.query('SELECT * FROM json_data WHERE id_wf = $1', [id_wf]);
  return result.rows as JsonDataDto[];
};