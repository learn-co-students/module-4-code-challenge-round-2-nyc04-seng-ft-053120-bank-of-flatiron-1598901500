import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state={
    transactions:[],
    searchValue: ''
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
  
  updateStatetrans = (obj) => {
    this.setState((previousTrans) => ({
       transactions: [obj, ...previousTrans.transactions]
    }) )
  }
  
  updateSearch = (searchTerm) => {
    this.setState({
      searchValue: searchTerm
    })
  }
  
  removeTransaction = (id) => {
    console.log("youve made it back to A.C")
    let newTrans = this.state.transactions.filter(tran => tran.id !== id)
    this.setState({transactions: newTrans})
  }
  
  
  
  render() {
    let filteredArray = this.state.transactions.filter((tran) => {
      return tran.description.toLowerCase().includes(this.state.searchValue)
   })

    return (
      <div>
        <Search 
          searchInput={this.updateSearch} 
          searchValue={this.state.searchValue}
        />

        <AddTransactionForm newTran={this.updateStatetrans}/>

        <TransactionsList removeTran={this.removeTransaction}transactions={filteredArray}/>
      </div>
    );
  }
}

export default AccountContainer;
