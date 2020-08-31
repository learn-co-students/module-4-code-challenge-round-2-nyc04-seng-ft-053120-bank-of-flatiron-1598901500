import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: '',
    sort: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then((transactionObjArr) => {
      this.setState({
        transactions: transactionObjArr
      })
    })
  }

  addNewTransaction = (transaction) => {
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
    .then(res => res.json())
    .then((transactionObj) => {
      let newTransactionsList = [...this.state.transactions, transactionObj]
      this.setState({
        transactions: newTransactionsList
      })
    })
  }

  getSearchTerm = (term) => {
    this.setState({
      search: term
    })
  }

  sort = (sortType) => {
    this.setState({
      sort: sortType
    })
  }

  handleDelete = (id) => {
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then((deletedObj) => {
      let newList = this.state.transactions.filter(transaction => transaction.id !== id)
      this.setState({
        transactions: newList
      })
    })
  }

  render() {
    return (
      <div>
        <Search getSearchTerm={this.getSearchTerm} sort={this.sort} />
        <AddTransactionForm addNewTransaction={this.addNewTransaction}/>
        <TransactionsList 
          searchTerm={this.state.search} 
          transactions={this.state.transactions} 
          sortType={this.state.sort}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default AccountContainer;
