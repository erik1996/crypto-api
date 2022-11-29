export interface IResponseData {
  message: string;
  data: Record<string, unknown> | Array<Record<string, unknown>> | null;
}
