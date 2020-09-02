import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(res => res.json())
    .then((transactionArr)=> {
       
      this.setState({
        transactions: transactionArr
      })
    })
  }

//the function helps us access the input from the child, so we send down, get single transaction, then update state since it lives here
  addedTransaction = (singleTransaction) => {
    //updating our array of transactions
    let arrOfTransactions = [...this.state.transactions, singleTransaction]
    this.setState({
      transactions: arrOfTransactions
    })
  }
  render() {
    return (
      <div>
        <Search />
        {/* sending down the lobster trap to form so they can send back the input which updates state*/}
        <AddTransactionForm addedTransaction={this.addedTransaction}/>
        {/* sending the props to transactionList  */}
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
