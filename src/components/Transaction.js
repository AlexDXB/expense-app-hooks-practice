import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = props.trans.amount < 0 ? "-" : "+";
  return (
    <li className={props.trans.amount < 0 ? "minus" : "plus"}>
      {props.trans.text}{" "}
      <span>
        {sign}${Math.abs(props.trans.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(props.trans.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
