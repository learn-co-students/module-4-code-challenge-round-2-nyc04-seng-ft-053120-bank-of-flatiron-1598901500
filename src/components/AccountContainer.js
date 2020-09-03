import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transactions: [],
    searchInput: "",
  }
  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(r => r.json())
    .then((transactionsObj)=>{
          this.setState({
            transactions: transactionsObj
          })
      })
    }
  addNewTransaction = (newTransaction) => {
      this.setState({
        transactions: [newTransaction,...this.state.transactions]
      })
  }
  filterSearchInput = (userInput) =>{
    this.setState({
      searchInput: userInput.target.value
    })}
    // filtered = () =>{
    // return this.state.transactions.filter(transact => transact.description.includes(this.searchInput))
    // }
  render() {
    return (
      <div>
        <Search filterSearchInput={this.filterSearchInput}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList userInput={this.userInput} transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
