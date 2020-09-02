import React, { Component } from "react";


class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

//handles changes done to the key value pairs 
handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  let newTransaction = {
    date: this.state.date,
    description: this.state.description,
    category: this.state.category,
    amount: this.state.amount
  }

  fetch("http://localhost:6001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTransaction)
  })
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
