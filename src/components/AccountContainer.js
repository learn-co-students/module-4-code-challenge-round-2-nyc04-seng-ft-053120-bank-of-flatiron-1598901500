import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: ""
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

  // HANDLE SEARCH TO UPDATE STATE
  handleSearch = (searchInput) => {
    // console.log("FROM CONTAINER", searchInput)
    this.setState({
      searchTerm: searchInput
    })
  }

  render() {
    // console.log(this.state.transactions)
    // FILTER TRANSACTIONS BASED ON SEARCH INPUT
    const filteredTransactions = this.state.transactions.filter((trans) => {
      return trans.description.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase())
    })

    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;