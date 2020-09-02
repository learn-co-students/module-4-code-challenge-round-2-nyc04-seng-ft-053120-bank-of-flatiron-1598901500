import React from "react";

const Transaction = (props) => {
  
  const {date, amount, category, description} = props.tranObj

  return (
    // going from left to right date/ description category and amount
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
