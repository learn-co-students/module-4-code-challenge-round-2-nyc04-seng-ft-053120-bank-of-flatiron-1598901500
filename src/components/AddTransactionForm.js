import React, { Component } from "react";
import { enumDeclaration } from "@babel/types";

class AddTransactionForm extends Component {
  
  state = {
    date: "",
    description: "",
    category: "",
    amount: 0

  }

  

  handleInput = (evt) => {
    this.setState({
    [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    let transactionFormData = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }
    fetch('http://localhost:6001/transactions', {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(transactionFormData)
        })
      .then(res=> res.json())
      .then((newTransaction)=>{
        //console.log(newTransaction)
        //addedTransaction is the lobster trap that calls down to child to get new info then updates state
        this.props.addedTransaction(newTransaction)
      })
  }




  
  
  render() {

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            
            <input type="date" name="date" 
            value={this.state.date}  
            onChange={this.handleInput}/>
            
            <input type="text" name="description" placeholder="Description" 
            value={this.state.description} 
            onChange={this.handleInput}/>
            
            <input type="text" name="category" placeholder="Category" 
            value={this.state.category} 
            onChange={this.handleInput}/>
            
            <input type="number"name="amount"placeholder="Amount"step="0.01"
            value={this.state.amount} 
            onChange={this.handleInput}/>
          
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
