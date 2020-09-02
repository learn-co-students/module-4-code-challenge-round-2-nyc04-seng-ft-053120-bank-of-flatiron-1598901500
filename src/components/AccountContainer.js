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

  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search />
        <AddTransactionForm updateTransaction={this.updateTransaction}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
