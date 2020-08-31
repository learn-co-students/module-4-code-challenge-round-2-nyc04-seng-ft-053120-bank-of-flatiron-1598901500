import React from "react";

const Transaction = ({ transaction, handleDeleteTransaction }) => {
  const { date, description, category, amount } = transaction;
  return (
    <tr>
      <td>
        <i
          className="window close outline icon"
          onClick={(e) => handleDeleteTransaction(transaction)}
        ></i>
        {date}
      </td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
