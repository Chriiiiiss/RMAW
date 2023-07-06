export interface IApiResponses {
  results: Array<object>;
  info: {
    next: string;
    count: number;
    pages: number;
    prev: string;
  };
}
