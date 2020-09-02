import React from "react";

const Transaction = (props) => {
    
    let {trans} = props
    let {date,description,category,amount} = trans
      //  console.log(date)
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
