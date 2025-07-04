import React, { useState } from "react";
import { fetchWorkflowById } from "../api/workflowApi";
import { useWorkflowContext } from "../context/WorkflowContext";

//TYPES
import type { Workflow } from "../types";

const PAGE_SIZE = 10;

interface WorkflowListProps {
  onSelectWorkflow: (workflowJson: any) => void;
}

const WorkflowList: React.FC<WorkflowListProps> = ({ onSelectWorkflow }) => {
  const { workflows, loading, error } = useWorkflowContext();
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;



  const handleWorkflowClick = async (workflow: Workflow) => {
    try {
      const json = await fetchWorkflowById(workflow.id);
      onSelectWorkflow(json);
    } catch (err) {
      console.error(err);
    }
  };

  const totalPages = Math.ceil(workflows.length / PAGE_SIZE);
  const paginated = workflows.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div>
      <h2>Workflows</h2>
      <ul>
        {paginated.map((wf) => (
          <li key={wf.id}>
            <button onClick={() => handleWorkflowClick(wf)}>{wf.name}</button>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WorkflowList;
