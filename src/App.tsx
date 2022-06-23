import React from 'react';
import './App.css';
import { SearchContextProvider } from 'context/searchContext/provider';

export const App = () => (
  <SearchContextProvider>
    <div className="App" />
  </SearchContextProvider>
);
