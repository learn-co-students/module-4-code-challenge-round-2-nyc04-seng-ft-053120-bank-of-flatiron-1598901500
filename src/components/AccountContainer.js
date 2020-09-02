import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transactions:[]
  }

  transactionsData = () => {
    fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(data => this.saveDataToState(data))
  }

  saveDataToState = (arr) => {
    this.setState({transactions:[...arr]})
  }

  componentDidMount(){
    this.transactionsData()
  }
  
  
  render() {
    // console.log(this.state)
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
