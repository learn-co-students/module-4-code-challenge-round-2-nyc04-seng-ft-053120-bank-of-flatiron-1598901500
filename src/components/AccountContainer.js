import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(r => r.json())
    .then(transactions => this.setState({transactions: transactions}))
  }

  handleNew = newT => this.setState({transactions: [...this.state.transactions, newT]})

  handleSearch = searchTerm => this.setState({searchTerm})
  

  render() {
    let {transactions, searchTerm} = this.state
    let searchTransactions = transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return (
      <div>
        <Search searchTerm={searchTerm} handleSearch={this.handleSearch}/>
        <AddTransactionForm handleNew={this.handleNew}/>
        <TransactionsList transactions={searchTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;