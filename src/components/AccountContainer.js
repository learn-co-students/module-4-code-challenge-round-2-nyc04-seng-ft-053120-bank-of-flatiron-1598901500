import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: []
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

  render() {
    // console.log(this.state.transactions)
    // const transactionsArray = 
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
