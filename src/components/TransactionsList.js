import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  return (
    <table className="ui celled striped padded table">

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
      {props.filteredData.map(evt => {
        return (
          <tr>
            <td>{evt.date}</td>
            <td>{evt.description}</td>
            <td>{evt.category}</td>
            <td>{evt.amount}</td>
          </tr>
        )
      }

      )

      }

    </table>







  );
};

export default TransactionsList;
