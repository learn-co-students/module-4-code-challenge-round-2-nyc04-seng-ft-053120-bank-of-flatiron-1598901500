import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      description: "",
      category: "",
      amount: ""
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTransaction(this.state);
    this.setState({
      date: "",
      description: "",
      category: "",
      amount: ""
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" value={this.state.date} name="date" onChange={this.handleInputChange} />
            <input type="text" value={this.state.description} name="description" placeholder="Description" onChange={this.handleInputChange} />
            <input type="text" value={this.state.category} name="category" placeholder="Category" onChange={this.handleInputChange} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleInputChange}
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
