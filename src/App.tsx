import React from 'react';
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const state = useSelector((state) => { return state}) // to get state
  const dispatch = useDispatch() // to use actions

  return (
        <div className='text-6xl'>TAILWINDCSS</div>
  );
};
