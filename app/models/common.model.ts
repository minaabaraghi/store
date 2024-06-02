export interface ApiResultModel<T> {
    isSuccess: boolean;
    code: number;
    pageInfo: PageInfoModel;
    messages: string[];
    autoClose: any;
    data: T;
  
  }
  
  export class PageInfoModel {
    total!: number;
    pageSize!: number;
    pageNumber!: number;
  }
  
  export class ColumnModel {
    id: string | undefined;
    label: string | undefined;
    hasFormat?: boolean = false;
    isSpan?: boolean = false;
    spanClass?: (value: string) => string;
    format?: (value: any) => string;
  }