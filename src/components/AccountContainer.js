import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: []
  }

  // FETCH TRANSACTIONS
  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(r => r.json())
    .then(transactionsArr => {
      // ADD TO STATE
      this.setState({
        transactions: transactionsArr
      })
    })
  }

  // ADD TRANSACTION TO TRANSACTION ARRAY
  addTransaction = (transFromChild) => {
    // console.log("FROM CONTAINER", transFromChild)
    const updatedTransArr = [transFromChild, ...this.state.transaction]
    // SET STATE
    this.setState({
      transactions: updatedTransArr
    })
  }

  render() {
    // console.log(this.state.transactions)
    // const transactionsArray = 
    return (
      <div>
        <Search />
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
