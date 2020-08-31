import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: "",
  }

  handleChange = (event) => {
    event.persist();
    this.setState(prevState => ({
      [event.target.name]: event.target.value
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleNewTransaction(this.state);
    event.target.reset();
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="inline fields">
            <input onChange={this.handleChange} type="date" name="date" />
            <input onChange={this.handleChange} type="text" name="description" placeholder="Description" />
            <input onChange={this.handleChange} type="text" name="category" placeholder="Category" />
            <input
              onChange={this.handleChange}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
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
