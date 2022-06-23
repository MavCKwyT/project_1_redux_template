import { createContext } from 'react';
import { ISearchContext } from 'context/searchContext/types';

const defaultValue = {};
export const SearchContext = createContext<ISearchContext>(defaultValue);
