import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }
componentDidMount() {
  fetch("http://localhost:6001/transactions")
  .then(res => res.json())
  .then((transactionAry) => 
  //console.log(transactionAry))
  this.setState({transactions: transactionAry}) )
}

  render() {
    //console.log(this.state.transactions);
  let eachTransact = this.state.transactions.map(transaction =>  transaction={transaction})
   // console.log(eachTransact);
    return (

      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList />
      </div>
    );
  }
}

export default AccountContainer;
