import React from "react";

const Transaction = (props) => {
  const { id, date, description, category, amount } = props.transaction;

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button className="ui inverted red button" onClick={() => props.deleteTransaction(id)}>X</button></td>
    </tr>
  );
};

export default Transaction;
