import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const TransactionAPI = "http://localhost:6001/transactions"

class AccountContainer extends Component {
  //set the state Array of transactions and SearchTerm 
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
  //function passed down to add tranactions to state of transactions:
  addTransaction = (newTransaction) => {
    let addTransact = [newTransaction,...this.state.transactions]
    this.setState({
      transactions: addTransact
    })
  }
  //helper function passed down to child to handle changes done to the search
  handleSearchChange = searchTerm => {
    this.setState({
      searchTerm: searchTerm
    })
  }
  //filtered through transactions state and returned inside a variable to send down to TransactionList
  render() {
    let filteredTransactions = this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return (
      <div>
        <Search searchTerm={this.searchTerm} 
                handleSearchChange={this.handleSearchChange}/>
        <AddTransactionForm 
                addTransact={this.addTransaction} />
        <TransactionsList 
                listings={filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
