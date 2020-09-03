import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  let turnToTransaction = () => {
   return props.transactions.map(transact => <Transaction key={transact.id} transact={transact}/>)
  }
   
  return (
    // {
    //   "id": 1,
    //   "date": "2019-12-01",
    //   "description": "Paycheck from Bob's Burgers",
    //   "category": "Income",
    //   "amount": 1000
    // },
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
            {turnToTransaction()}
       
      </tbody>
    </table>
  );
};

export default TransactionsList;
