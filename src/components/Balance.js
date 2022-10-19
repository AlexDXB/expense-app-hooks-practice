import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>
        $
        {transactions
          .map((trans) => trans.amount)
          .reduce((acc, item) => acc + item, 0)
          .toFixed(2)}
      </h1>
    </div>
  );
};

export default Balance;
