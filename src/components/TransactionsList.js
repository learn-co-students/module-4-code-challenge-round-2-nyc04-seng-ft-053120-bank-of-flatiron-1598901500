import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ handleSort, transactions, handleDelete }) => {
  const mapTransactions = () =>
    transactions.map((transaction) => (
      <Transaction
        key={transaction.id}
        transactionObj={transaction}
        handleDelete={handleDelete}
      />
    ));

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th id="description-sort">
            <h3
              onClick={handleSort}
              id="description"
              className="ui center aligned header"
            >
              Description
            </h3>
          </th>
          <th id="category-sort">
            <h3
              onClick={handleSort}
              id="category"
              className="ui center aligned header"
            >
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
          <th>Sure?</th>
        </tr>
        {mapTransactions()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
