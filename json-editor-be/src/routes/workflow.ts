import { Router } from 'express';
import { listWorkflows, getWorkflowById } from '../controllers/workflowController';

const router = Router();

router.get('/', listWorkflows);
router.get('/:id', getWorkflowById);


export default router;