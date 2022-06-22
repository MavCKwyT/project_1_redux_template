import { ITableData } from 'api/types';

export interface ISearchContext {
  search: string,
  setSearch: (event: string) => void,
  data: ITableData[],
}
