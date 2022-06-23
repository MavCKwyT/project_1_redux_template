import React from 'react';
import './App.css';
import { SearchContextProvider } from 'context/searchContext/provider';

export const App = () => {
  const res = async () => {
    const resp = await fetch('api/hello');
    console.log('resp', resp);
    const body = await resp.json();
    return body;
  };
  console.log('res', res());

  return (
    <SearchContextProvider>
      <div className="App" />
    </SearchContextProvider>
  );
};
