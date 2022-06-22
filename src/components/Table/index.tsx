import React, { useContext } from 'react';
import { SearchContext } from 'context/searchContext';
import * as s from './styles';

export const Table = () => {
  const { data } = useContext(SearchContext);

  return (
    <s.Table style={{}}>
      <s.Thead>
        <s.Tr>
          <s.Th>id</s.Th>
          <th>email</th>
          <s.Th>first_name</s.Th>
          <s.Th>pay_status</s.Th>
          <s.Th>last_name</s.Th>
          <s.Th>username</s.Th>
          <s.Th>profile_link</s.Th>
        </s.Tr>
      </s.Thead>
      <s.Tbody>
        {data.map((el) => (
          <s.Tr key={el.id}>
            <s.Td>{el.id}</s.Td>
            <s.Td>{el.email}</s.Td>
            <s.Td>{el.first_name}</s.Td>
            <s.Td>{String(el.pay_status)}</s.Td>
            <s.Td>{el.last_name}</s.Td>
            <s.Td>{el.username}</s.Td>
            <s.Td>{el.profile_link}</s.Td>
          </s.Tr>
        ))}
      </s.Tbody>
    </s.Table>
  );
};

/*
* show data in grid
* search in table
* sort in table
* */
