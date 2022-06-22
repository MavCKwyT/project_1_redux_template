import React from 'react';
import './App.css';
import { SearchContextProvider } from 'context/searchContext/provider';
import { Header } from 'components/Header';
import { Table } from 'components/Table';

export const App = () => (
  <SearchContextProvider>
    <div className="App">
      <Header />
      <Table />
    </div>
  </SearchContextProvider>
);
