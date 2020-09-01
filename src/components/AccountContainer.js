import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state ={
    search:"",
    transactions : []
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(dataObj => {
      this.setState({
        transactions:dataObj
      })
    })
  }

  handleSearchChange = (evt) =>{
    this.setState({
      search:evt.target.value
    })
  }

//trying things a little differently.
  searchFilter = () => {
    let searchTerm = this.state.search.toLowerCase()
    let transactionArray = this.state.transactions
    return transactionArray.filter(transaction => this.state.search ? transaction.description.toLowerCase().includes(searchTerm) : true)
  }

  addOneTransaction = (singleTransactionFromForm) => {
    let allTransctions =[singleTransactionFromForm,...this.state.transactions]
    this.setState({
      transactions: allTransctions
    })
  }




  render() {
    let transactions = this.searchFilter()
    return (
      <div>
        <Search searchTerm={this.state.search} searchChange={this.handleSearchChange}/>
        <AddTransactionForm addOneTransaction={this.addOneTransaction}/>
        <TransactionsList transactions = {transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
