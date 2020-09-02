import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  

  //map over props being sent from AccountContainer.
  //have them render and return >> send down as props to Transaction Component
  render() {
    let listItems = this.props.listings.map(transaction => {
      return <Transaction key={transaction.id} transaction={transaction}/>
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
        {listItems}
      </tbody>
    </table>
  );
};
}

export default TransactionsList;
