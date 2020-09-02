import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ""
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(res => res.json())
    .then((transactionArr)=> {
       
      this.setState({
        transactions: transactionArr
      })
    })
  }

//the function helps us access the input from the child, so we send down, get single transaction, then update state since it lives here
  addedTransaction = (singleTransaction) => {
    //updating our array of transactions
    let arrOfTransactions = [...this.state.transactions, singleTransaction]
    this.setState({
      transactions: arrOfTransactions
    })
  }
//sending down changeSearch to child to get user input to be filtered by description so we can update state
  changeSearch = (userTyped) => {
    this.setState({
      search: userTyped
    })
  }
  render() {
    //when i call filteredTrans on line 49 all of my transactions go away? 
    let filteredTrans = this.state.transactions.filter((transObj) => {
      return transObj.description.includes(this.state.changeSearch)
    })
    return (
      <div>
        <Search search={this.state.search} />
        {/* sending down the lobster trap to form so they can send back the input which updates state in parent*/}
        <AddTransactionForm addedTransaction={this.addedTransaction}/>
        {/* sending the props to transactionList  */}
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
