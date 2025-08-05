import { Request, Response } from "express";
import { getWorkflowByIdQuery, listWorkflowsQuery } from '../queries/workflowQueries';
import { getJsonsByWorkflowIdQuery } from '../queries/jsonDataQueries';
import logger from "../utils/logger";



export const listWorkflows = async (req: Request, res: Response) => {
  try {
    const workflows = await listWorkflowsQuery();
    res.json({ workflows });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};


export const getWorkflowById = async (req: Request, res: Response) => {
  const { id } = req.params;
  logger.info("Fetching workflow for ID:", id);
   //await new Promise(resolve => setTimeout(resolve, 10000));
   logger.info("Workflow fetch delay complete");

  try {
    // Get the workflow DTO (without jsons)
    const workflow = await getWorkflowByIdQuery(id);
    if (!workflow) {
      res.status(404).json({ error: "Workflow not found" });
      return;
    }

    const jsons = await getJsonsByWorkflowIdQuery(id);

    // Attach jsons to workflow DTO
    workflow.jsons = jsons;

    res.json(workflow);
  } catch (err) {
    logger.error("Something went wrong", err);
    res.status(500).json({ error: (err as Error).message });
  }
};