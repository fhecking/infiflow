import React, { createContext, useContext } from "react";
import { useWorkflows } from "../hooks/useWorkflows";
import type { Workflow } from "../types";

interface WorkflowContextValue {
  workflows: Workflow[];
  loading: boolean;
  error: string | null;
}

const WorkflowContext = createContext<WorkflowContextValue | undefined>(undefined);

export const WorkflowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { workflows, loading, error } = useWorkflows();
  return (
    <WorkflowContext.Provider value={{ workflows, loading, error }}>
      {children}
    </WorkflowContext.Provider>
  );
};

export function useWorkflowContext() {
  const ctx = useContext(WorkflowContext);
  if (!ctx) throw new Error("useWorkflowContext must be used within a WorkflowProvider");
  return ctx;
}