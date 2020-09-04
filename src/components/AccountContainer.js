import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
 
    state = {
      transactions: []
    }

    // create a fetch request to backend

    componentDidMount(){
      fetch("http://localhost:6001/transactions")
      .then(resp => resp.json())
      .then(transObj => {
        this.setState({
          transactions: transObj
        })
      })
    }
    // add fetched data to state
  render() {
    // console.log("AccountContainer state:", this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
