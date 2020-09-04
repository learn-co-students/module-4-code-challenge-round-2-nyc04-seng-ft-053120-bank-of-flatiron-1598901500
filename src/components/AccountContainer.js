import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: " "
  }

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(resp => resp.json())
    .then((transactionsArr) => {
      this.setState({
        transactions: transactionsArr
      })
    })
  }

  changeSearchTerm = (newSearchTerm) => {
    this.setState({
      searchTerm: newSearchTerm
    }) 
  }

  render() {
    //I know I am supposed to use a filter here so I get only what is typed in search -> newSearchTerm
    return (
      <div>
        <Search 
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />
        <AddTransactionForm />
        
        <TransactionsList 
        transactions={this.state.transactions}
        />
      </div>
    );
  }
}

export default AccountContainer;
