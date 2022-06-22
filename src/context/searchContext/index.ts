import { createContext } from 'react';
import { ISearchContext } from 'context/searchContext/types';

const defaultValue = {
  search: '',
  setSearch: () => {},
  data: [],
};
export const SearchContext = createContext<ISearchContext>(defaultValue);
