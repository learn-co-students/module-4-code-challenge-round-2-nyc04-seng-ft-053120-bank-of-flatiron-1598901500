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

  addTransaction = (newTransaction) => {
    let addTransact = [...this.state.transactions, newTransaction]
    this.setState({
      transactions: addTransact
    })
  }
  
  handleSearchChange = searchTerm => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  render() {
    let filteredTransactions = this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return (
      <div>
        <Search searchTerm={this.searchTerm} handleSearchChange={this.handleSearchChange}/>
        <AddTransactionForm addTransact={this.addTransaction} />
        <TransactionsList listings={filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
