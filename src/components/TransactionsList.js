import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  const renderTransactions = () => {
    return props.transactions.map(transaction => (<Transaction handleRemoveTransaction={props.handleRemoveTransaction} key={transaction.id} transaction={transaction}  />))
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th onClick={props.handleFilter}>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th onClick={props.handleFilter}>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th onClick={props.handleFilter}>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th onClick={props.handleFilter}>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {renderTransactions()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
