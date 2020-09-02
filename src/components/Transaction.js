import React from "react";

const Transaction = (props) => {
  
  const {amount, category, date, description} = props.tranObj

  return (
    // going from left to right date/ description category and amount
    <tr>
      <td>{amount}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
