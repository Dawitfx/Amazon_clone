/* eslint-disable react/prop-types */
// import React from 'react'
import { useReducer, createContext } from "react";

export const DataCoentext = createContext();

const DataProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataCoentext.Provider value={[state, dispatch]}>
      {children}
    </DataCoentext.Provider>
  );
};

export default DataProvider;
