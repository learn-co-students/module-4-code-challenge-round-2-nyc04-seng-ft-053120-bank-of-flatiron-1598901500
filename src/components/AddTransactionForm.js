import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    const { date, description, category, amount } = this.props.form;

    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input
              type="date"
              name="date"
              value={date}
              onChange={this.props.handleTransactionInput}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.props.handleTransactionInput}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={category}
              onChange={this.props.handleTransactionInput}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={amount}
              onChange={this.props.handleTransactionInput}
            />
          </div>
          <button
            className="ui button"
            type="submit"
            onClick={this.props.handleTransactionSubmit}
          >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
