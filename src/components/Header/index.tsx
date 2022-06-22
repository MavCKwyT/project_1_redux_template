import React, { FC, useContext } from 'react';
import { SearchContext } from 'context/searchContext';
import { Wrapper } from './styles';

export const Header: FC = () => {
  const { setSearch } = useContext(SearchContext);

  return (
    <Wrapper>
      <input
        placeholder="Search by username"
        onChange={(event) => setSearch(event.target.value)}
      />
    </Wrapper>
  );
};
