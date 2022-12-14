import React from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const state = useSelector((state) => { return state}) // to get state
  const dispatch = useDispatch() // to use actions

  return (
      <div className="App" style={{ backgroundColor: 'lightgray', height: '100px'}}></div>
  );
};
