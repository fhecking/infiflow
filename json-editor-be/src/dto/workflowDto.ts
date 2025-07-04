export interface JsonDataDto {
  id: number;
  name: string;
  id_wf: number;
  data: any;
}

export interface WorkflowDto {
  id: number;
  name: string;
  jsons: JsonDataDto[];
}