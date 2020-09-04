import React, { Component } from "react";

class AddTransactionForm extends Component {
  state={date: "", description: "", category: "", amount: 0}

  handleInput = e => {
    let {type, name, value} = e.target
    if (type==="number"){
      value = parseInt(value)
    }
    this.setState({[name]: value})
  }

  handleSubmit = e => {
    e.preventDefault()
    let {date, description, category, amount} = this.state
    fetch(`http://localhost:6001/transactions`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount
      })
    })
    .then(r => r.json())
    .then(newTransaction => {
      this.props.handleNew(newTransaction)
      this.setState({date: "", description: "", category: "", amount: 0})
    })
  }

  render() {
    let {date, description, category, amount} = this.state
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit} >
          <div className="inline fields">
            <input type="date" name="date" value={date} onChange={this.handleInput}/>
            <input type="text" name="description" placeholder="Description" value={description} onChange={this.handleInput}/>
            <input type="text" name="category" placeholder="Category" value={category} onChange={this.handleInput}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
              onChange={this.handleInput}
            />
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