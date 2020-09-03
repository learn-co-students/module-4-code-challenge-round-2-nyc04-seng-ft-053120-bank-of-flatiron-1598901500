import React from "react";

const Transaction = (props) => {
      // {
    //   "id": 1,
    //   "date": "2019-12-01",
    //   "description": "Paycheck from Bob's Burgers",
    //   "category": "Income",
    //   "amount": 1000
    // },
  return (
    <tr>
      <td>{props.transact.date}</td>
      <td>{props.transact.description}</td>
      <td>{props.transact.category}</td>
      <td>{props.transact.amount}</td>
    </tr>

  );
};

export default Transaction;
