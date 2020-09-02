import React, { Component } from "react";


class AddTransactionForm extends Component {
  //set state of form
  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

//function to handle the event of onCHANGE to equal the event's target's name : event.target.value
handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

//function to handle the event of SUBMIT
handleSubmit = (event) => {
  //event prevent default not necesary because it looks better without it
  let newTransaction = {
    date: this.state.date,
    description: this.state.description,
    category: this.state.category,
    amount: this.state.amount
  }
  //fetch, POST to save variable of newTransaction from above
  fetch("http://localhost:6001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTransaction)
  })
  //use Helper function coming from AccountContainer to add new stringified objet to the existing array of transactions.
  .then(r => r.json())
  .then((newTransaction) => {
    this.props.addTransact(newTransaction)
  })
}

//added onChange and values to each input
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input 
              type="date" 
              name="date" 
              value={this.state.date} 
              onChange={this.handleChange} />
            <input 
              type="text" 
              name="description" 
              placeholder="Description" 
              value={this.state.description} 
              onChange={this.handleChange} />
            <input 
              type="text" 
              name="category" 
              placeholder="Category" 
              value={this.state.category} 
              onChange={this.handleChange} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount} 
              onChange={this.handleChange} />
          </div>
          <button className="ui button" type="submit" >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
