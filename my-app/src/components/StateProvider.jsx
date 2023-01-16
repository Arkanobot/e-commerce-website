import React, { createContext, useContext, useReducer } from "react";

//creating a context to store data
export const StateContext = createContext();

// uses the stored data
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull the information from context
export const useStateValue = () => useContext(StateContext);
