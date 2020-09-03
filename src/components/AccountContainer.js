import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    transactions: [],
    searchTerm: ""
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

  changeSearchTerm = (termTyped) => {
    this.setState({
      searchTerm: termTyped
    })
  }

  render() {
    //console.log("State of Page:", this.state)
    let filteredTransArr = this.state.transactions.filter((trans) => {
      return trans.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return (
      <div>
        <Search 
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />
        <AddTransactionForm 
          addTransaction={this.addTransaction}
        />
        <TransactionsList
          transactions={filteredTransArr}
        />
      </div>
    );
  }
}

export default AccountContainer;
