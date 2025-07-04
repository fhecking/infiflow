import { useEffect, useState } from "react";
import { fetchWorkflows, fetchWorkflowById } from "../api/workflowApi";
import type { Workflow } from "../types";

export function useWorkflows() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWorkflows()
      .then(setWorkflows)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { workflows, loading, error };
}

export function useWorkflow(id: string | null) {
  const [workflow, setWorkflow] = useState<Workflow | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchWorkflowById(id)
      .then(setWorkflow)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { workflow, loading, error };
}