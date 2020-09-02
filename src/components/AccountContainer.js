import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: "" 
  }

  getTransactions() {
    fetch("http://localhost:6001/transactions")
    .then(r => r.json())
    .then(transactionArray => {
      this.setState({
        transactions: transactionArray
      })
    })
  }

  componentDidMount(){
    this.getTransactions()
  }

  handleSearchChange = searchTerm => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  addTransaction = (newTransaction) => {
    let transactionArr = [...this.state.transactions, newTransaction]
    this.setState({
      transactions: transactionArr
    })
  }

  render() {
    // console.log(this.state)
    let filteredTransactions = this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    return (
      <div>
        <Search searchTerm={this.searchTerm} handleSearchChange={this.handleSearchChange}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={filteredTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
