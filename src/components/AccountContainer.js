import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: "chi"
  }
  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(r => r.json())
    //.then((data) => console.table(data))
    .then((data) => 
    this.setState({
      transactions: data

    })
  )}

//adding new transactions from the form to the page 
  newTransactionState = newTransaction => {
    console.log(newTransaction)
    const addNewToPage = [newTransaction, ...this.state.transactions]
    this.setState({
      transactions: addNewToPage
    })
  }

//search
  changeSearchTerm = (theSearchTerm) => {
    this.setState({
      searchTerm: theSearchTerm
    })
  }


  render() {
    //let filteredSearch = this.state.transactions.filter((searchedTrans) => {
      //return searchedTrans.includes(this.state.searchTerm)
    //})
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm}/>
        <AddTransactionForm newTransactionState={this.newTransactionState} />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
