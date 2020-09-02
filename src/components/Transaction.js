import React from "react";

class Transaction extends React.Component {

  render() {
    // console.log(this.props.transaction)
    const{date, description, category, amount} = this.props.transaction

    return (
      <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
      </tr>
    );
  };
  }

export default Transaction;