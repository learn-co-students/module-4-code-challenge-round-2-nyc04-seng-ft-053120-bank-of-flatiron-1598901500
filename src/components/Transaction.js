import React from "react";

const Transaction = ({ transactionObj, handleDelete }) => {
  const { id, date, description, category, amount } = transactionObj;

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td className="delete-transaction" onClick={() => handleDelete(id)}>
        Delete
      </td>
    </tr>
  );
};

export default Transaction;
