import React, { Component } from 'react';

class AddTransactionForm extends Component {
  state = {
    date: '',
    description: '',
    category: '',
    amount: 0,
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTransaction(this.state);
  }

  render() {
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <div className="inline fields">
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={(event) => this.handleChange(event)}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={(event) => this.handleChange(event)}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={(event) => this.handleChange(event)}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={(event) => this.handleChange(event)}
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
