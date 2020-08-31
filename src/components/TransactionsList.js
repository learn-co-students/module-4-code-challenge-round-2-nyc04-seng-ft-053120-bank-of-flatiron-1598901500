import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  
  let renderTransactions = () => {
    let filteredTransactions = props.transactions
    .filter(transaction => {
      return transaction.description.toLowerCase().includes(props.searchTerm.toLowerCase())
    })
    .sort((transaction1, transaction2) => {
      if (props.sortType === "description") {
        return transaction1.description.localeCompare(transaction2.description)
      } else if (props.sortType === "category") {
        return transaction1.category.localeCompare(transaction2.category)
      } else {
        return true
      }
    })

    return filteredTransactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} handleDelete={props.handleDelete} />)
  }

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
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
        {renderTransactions()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
