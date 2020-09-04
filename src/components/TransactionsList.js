import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  console.log(props)
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className={props.date}>Date</h3>
          </th>
          <th>
            <h3 className={props.description}>Description</h3>
          </th>
          <th>
            <h3 className={props.category}>Category</h3>
          </th>
          <th>
            <h3 className={props.amount}>Amount</h3>
          </th>
        </tr>
        {/* render Transactions here */}
        
      </tbody>
    </table>
  );
};

export default TransactionsList;
