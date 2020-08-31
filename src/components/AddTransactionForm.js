import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: 0
  }

  changeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAmount = (event) => {
    let amountInput = Number(event.target.value)
    this.setState({
      amount: amountInput
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewTransaction(this.state)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(event) => {this.handleSubmit(event)}} className="ui form">
          <div className="inline fields">
            <input onChange={(event) =>{this.changeInput(event)}} type="date" name="date" value={this.state.date} />
            <input onChange={(event) =>{this.changeInput(event)}} type="text" name="description" placeholder="Description" value={this.state.description} />
            <input onChange={(event) =>{this.changeInput(event)}} type="text" name="category" placeholder="Category" value={this.state.category} />
            <input
              onChange={(event) =>{this.handleAmount(event)}}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
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
