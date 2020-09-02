import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  constructor() {

    super() 
    this.state = {
       transactions: [],
       search: ''

    }
  }

componentDidMount() {

   fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then((data) => {
       this.setState({

       transactions: data

       })
    })

}


searchHandler =(string) => {

this.setState({

  search: string

})
console.log(string)

}



addNewTrans = (newInfo) => {

       let updatedTrans = {

       date:  newInfo.date,
       description: newInfo.description,
       category: newInfo.category,
       amount: newInfo.amount

       }

       fetch('http://localhost:6001/transactions', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
           body: JSON.stringify(updatedTrans)
       })

       .then(res => res.json())
       .then(newTran => {
       this.setState({

        newArray: [...this.state.transactions, newTran]

       })
       })

       console.log(this.newArray)
       //add to the backend 
}

  render() {

    let filteredTransaction  = this.state.transactions.filter(trn => {
       return trn.description.includes(this.state.search)

    })
    return (
      <div>
        <Search search ={this.state.search} searchHandler = {this.searchHandler}/>
        <AddTransactionForm   addNewTrans= {this.addNewTrans}  />
        <TransactionsList  transactions = {filteredTransaction}   />
      </div>
    );
  }
}

export default AccountContainer;
