import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const TransactionAPI = "http://localhost:6001/transactions"

class AccountContainer extends Component {
  //set the state
  state = {
    transactions: [],
    searchTerm: "" 
  }
  //helper function to fetch data and set state of transactions: equal to data coming through
  getTransactions() {
    fetch(TransactionAPI)
    .then(r => r.json())
    .then(transaction => {
      this.setState({
        transactions: transaction
      })
    })
  }
  //call function 
  componentDidMount(){
    this.getTransactions()
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList listings={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
