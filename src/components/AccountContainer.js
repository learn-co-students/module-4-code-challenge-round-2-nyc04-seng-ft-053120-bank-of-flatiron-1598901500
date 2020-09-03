import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    transactions: []
  }
  
  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(r => r.json())
    .then((transArr) => {
      //console.log(transArr)
      this.setState({
        transactions: transArr
      })
    })
  }

  addTransaction = (singleTrans) => {
    let arrOfTrans = [singleTrans, ...this.state.transactions]
    this.setState({
      transactions: arrOfTrans
    })
  }

  render() {
    //console.log("State of Page:", this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm 
          addTransaction={this.addTransaction}
        />
        <TransactionsList
          transactions={this.state.transactions}
        />
      </div>
    );
  }
}

export default AccountContainer;
