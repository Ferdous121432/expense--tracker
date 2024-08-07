/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

//Initial State
const initialState = {
  transections: [
    { id: 1, text: "Flower", amount: -2000 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
    { id: 5, text: "Phone", amount: -50 },
    { id: 6, text: "Camera", amount: 150 },
  ],
};

// Create Context
export const Context = createContext(initialState);

// Provider Component
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //Actions
  //Delete Tracsection
  function deleteTransection(id) {
    dispatch({
      type: "DELETE_TRANSECTION",
      payload: id,
    });
  }

  //Add Tracsection
  function addTransection(transection) {
    dispatch({
      type: "ADD_TRANSECTION",
      payload: transection,
    });
  }

  return (
    <Context.Provider
      value={{
        ...state,
        deleteTransection: deleteTransection,
        addTransection: addTransection,
      }}
    >
      {children}
    </Context.Provider>
  );
};
