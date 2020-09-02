import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


class AccountContainer extends Component {
  
  state = {
    transactions: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(res => res.json())
    .then(transactionArr => {
      this.setState({
        transactions: transactionArr
      })
    })
  }

 updateTransaction =(transaction)=> {
   let newArray = [...this.state.transactions, transaction]
    this.setState({
      transactions: newArray
    })
 } 

 handleSearch = (evt) => {
  this.setState ({
    searchTerm: evt.target.value 
  })
 }

renderTransactions = () => {
  return this.state.transactions.filter((t) => {
    return t.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  })
}


  render() {
    console.log(this.renderTransactions())

    return (
      <div>
        <Search handleSearch={this.handleSearch} search={this.state.searchTerm}/>
        <AddTransactionForm updateTransaction={this.updateTransaction}/>
        <TransactionsList transactions={this.renderTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
