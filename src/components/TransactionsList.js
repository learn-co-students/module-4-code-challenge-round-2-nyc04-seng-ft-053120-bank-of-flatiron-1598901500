import React, { Component } from "react";
import Transaction from "./Transaction";

//changed arrow function to class based component
class TransactionsList extends Component {
  render(){
    // console.log(this.props.transactions)

    // passing each Transaction obj as prop to Transaction component to create a row for that Transaction obj
    const renderTransaction = this.props.transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)
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
          {renderTransaction}
        </tbody>
      </table>
    )
  }
}

export default TransactionsList;
