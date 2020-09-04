import React from "react";

const Transaction = (props) => {
  //console.log(props.transactions)
  let {date, description, category, amount} = props.transactions.date
  
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
