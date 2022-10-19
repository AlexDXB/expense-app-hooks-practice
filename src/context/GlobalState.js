import React, { createContext, useReducer } from "react";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Delete":
      return {
        ...state,
        transactions: state.transactions.filter(
          (trans) => trans.id !== action.payload
        ),
      };
    case "Add":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
// Create context
export const GlobalContext = createContext(initialState);
/// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "Delete",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "Add",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
