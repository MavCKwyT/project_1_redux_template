import React, { FC, ReactNode } from 'react';
import { SearchContext } from './index';

export interface IProps {
  children: ReactNode
}

export const SearchContextProvider: FC<IProps> = ({ children }) => {
  const context = {};

  return (
    <SearchContext.Provider value={context}>
      {children}
    </SearchContext.Provider>
  );
};
