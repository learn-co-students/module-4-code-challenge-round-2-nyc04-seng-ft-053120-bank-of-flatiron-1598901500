import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {transactions: [], searchTerm: "", sortBy: "category"}

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(r => r.json())
    .then(transactions => this.setState({transactions: transactions}))
  }

  handleNew = newT => this.setState({transactions: [...this.state.transactions, newT]})

  handleSearch = searchTerm => this.setState({searchTerm})

  handleSort = sortBy => this.setState({sortBy})

  handleDelete = id => {
    let filteredTransactions = this.state.transactions.filter(transaction => transaction.id !== id)
    this.setState({transactions: filteredTransactions})
  }

  render() {
    let {transactions, searchTerm, sortBy} = this.state
    let displayTransactions = () => {
        if(sortBy==="category"){
        return transactions.sort((t1,t2) => t1.category.localeCompare(t2.category))
        .filter(transaction => transaction.description.toLowerCase().includes(searchTerm.toLowerCase()))
      }else if(sortBy==="description"){
        return transactions.sort((t1,t2) => t1.description.localeCompare(t2.description))
        .filter(transaction => transaction.description.toLowerCase().includes(searchTerm.toLowerCase()))
      }
  }
    return (
      <div>
        <p>
          Sort
          <select value={sortBy} onChange={e => this.handleSort(e.target.value)}>
            <option value="category">Category</option>
            <option value="description">Description</option>
          </select>
        </p>
        <Search searchTerm={searchTerm} handleSearch={this.handleSearch}/>
        <AddTransactionForm handleNew={this.handleNew}/>
        <TransactionsList transactions={displayTransactions()} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;