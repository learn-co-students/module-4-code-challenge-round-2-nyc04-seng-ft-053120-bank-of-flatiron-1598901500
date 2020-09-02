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
    console.log("you made it back to A.C")
    this.setState({
      searchValue: searchTerm
    })
  }
  

   filteredArray = () => {
    this.state.transactions.filter((tran) => {
       console.log(tran)
    }
    )
   }
   
   
   
  
  
  
  render() {
  
  //  console.log("from the A.C ", this.state)
    return (
      <div>
        <Search 
          searchInput={this.updateSearch} 
          searchValue={this.state.searchValue}
        />

        <AddTransactionForm newTran={this.updateStatetrans}/>

        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
