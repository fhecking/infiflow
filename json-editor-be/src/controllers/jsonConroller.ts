
// const jsons = [
//   { id: "1", name: "JSON A", id_wf: "1", data: { foo: "value1", bar: "value2" } },
//   { id: "2", name: "JSON B", id_wf: "2", data: { baz:  "qux"} },
// ];


// export const listWorkflows = (req: Request, res: Response) => {
//   res.json({ jsons: workflows.map(({ id, name }) => ({ id, name })) });
// };
// export const getWorkflowById = (req: Request, res: Response) => {
//   const { id } = req.params;
//   const workflow = workflows.find(wf => wf.id === id);
//   if (!workflow) {
//     res.status(404).json({ error: "Workflow not found" });
//     return;
//   }

//   // Find JSONs associated with this workflow
//   const relatedJsons = jsons.filter(json => json.id_wf === id);
  
//   res.json({ workflow, jsons: relatedJsons });
// };