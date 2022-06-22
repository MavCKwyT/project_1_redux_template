import React, { FC, ReactNode, useState } from 'react';
import { SearchContext } from './index';
import data from '../../api/data.json';

export interface IProps {
  children: ReactNode
}

export const SearchContextProvider: FC<IProps> = ({ children }) => {
  const [search, setSearch] = useState('');
  const context = {
    search,
    setSearch: (event: string) => setSearch(event),
    data,
  };

  return (
    <SearchContext.Provider value={context}>
      {children}
    </SearchContext.Provider>
  );
};
