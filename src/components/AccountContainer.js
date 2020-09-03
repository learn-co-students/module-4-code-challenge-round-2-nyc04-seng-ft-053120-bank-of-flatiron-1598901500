import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchItem: ""
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(res => res.json())
    .then(data =>{
            //console.log(data)
            this.setState(
              {transactions: data}
            )
    })
  }
  
  newTransactionState = newTansaction => {
    const updatedTransaction = [...this.state.transactions, newTansaction]
    this.setState({
      transactions: updatedTransaction
    })
  }

  changeSearchItem = typedItem => {
  this.setState({
    searchItem: typedItem
  })
  }
  render() {
    //console.log(this.state.transactions)
    let filteredTransactions = this.state.transactions.filter((transactionFilter)=>{
      return transactionFilter.description.toLowerCase().includes(this.state.searchItem.toLowerCase())
    })
    return (
      <div>
        <Search searchItem={this.state.searchItem} changeSearchItem={this.changeSearchItem}/>
        <AddTransactionForm newTransactionState = {this.newTransactionState}/>
        <TransactionsList transactions = {filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
