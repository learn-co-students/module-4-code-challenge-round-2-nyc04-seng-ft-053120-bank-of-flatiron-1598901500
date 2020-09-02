import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  handleAllInputs = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
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
      this.props.addTransaction(newTransaction)
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit} >
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleAllInputs}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleAllInputs}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleAllInputs}/>
            <input
              value={this.state.amount}
              onChange={this.handleAllInputs}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
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
