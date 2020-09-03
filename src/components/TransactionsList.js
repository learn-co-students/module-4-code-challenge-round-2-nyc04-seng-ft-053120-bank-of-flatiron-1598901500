import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  render() {
    let arrofTrans = this.props.transactions.map((transPOJO) => {
      return <Transaction 
        key={transPOJO.id}
        transaction={transPOJO}
      />
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
          {arrofTrans}
        </tbody>
      </table>
    );
  };
  }
  

export default TransactionsList;
