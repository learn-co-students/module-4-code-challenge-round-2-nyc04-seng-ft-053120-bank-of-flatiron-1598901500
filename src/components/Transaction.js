import React from "react";


class Transaction extends React.Component {
  
  //render data from props on page
render() {
  let {transaction} = this.props
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
  }
};

export default Transaction;
