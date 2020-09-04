import React, { Component } from "react"
import TransactionsList from "./TransactionsList"
import Search from "./Search"
import AddTransactionForm from "./AddTransactionForm"
import Transaction from "./Transaction"

//Parent Component should initialize state and pass it as props to child components where needed
class AccountContainer extends Component {
  //initialize transactions to empty array
  state = {
    transactions: []
  }

  //GET request
  //componentDidMount is triggered after the initial web page load
  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(transactionObjs => {
      //set the fetched objects to value of state...set state will trigger render
      this.setState({
        transactions: transactionObjs
      })
    })
  }

  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        {/* passes transactions as Props */}
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer;
