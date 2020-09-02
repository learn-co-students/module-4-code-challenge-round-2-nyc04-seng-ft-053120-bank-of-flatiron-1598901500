import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

     const transactionComponent = props.transactions.map(trans => {
       return  <Transaction  key= {trans.id} trans= {trans} />
     })
  return (
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
        {transactionComponent}
      </tbody>
    </table>
  );
};

export default TransactionsList;
