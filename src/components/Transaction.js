import React from "react";

const Transaction = ({transaction, handleDelete}) => {
  let {id, date, description, category, amount} = transaction

  let handleOnClick = () => {
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(emptyT => handleDelete(id))
  }
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td  onClick={handleOnClick}>{"🗑️"}</td>
    </tr>
  );
};

export default Transaction;