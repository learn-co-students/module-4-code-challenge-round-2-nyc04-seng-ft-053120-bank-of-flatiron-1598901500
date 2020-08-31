import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],

    form: {
      date: "",
      description: "",
      category: "",
      amount: "",
    },

    search: "",
  };

  componentDidMount() {
    this.getTransactions();
  }

  getTransactions = () => {
    fetch("http://localhost:6001/transactions")
      .then((response) => response.json())
      .then((transactions) => {
        this.allTransactions = transactions;
        this.setState({ transactions });
      });
  };

  // Handle the user's input as they type in the new transaction form, update this.state.form to reflect this
  handleTransactionInput = (e) => {
    const name = e.target.name,
      value = e.target.value;

    const form = {
      ...this.state.form,
      [name]: value,
    };

    this.setState({ form });
  };

  // Handles the user's submission of the form, makes a fetch post request to server to add new transaction object, sets state to reflect change
  handleTransactionSubmit = (e) => {
    e.preventDefault();
    const newTransaction = this.state.form;

    fetch("http://localhost:6001/transactions", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((newTransaction) => {
        const transactions = [...this.state.transactions, newTransaction],
          form = {
            date: "",
            description: "",
            category: "",
            amount: "",
          };

        this.setState({ transactions, form });
      });
  };

  // Handles user's input inot searchbar. Only transactions with a description matching the search term should be shown in the transactions table.
  handleSearchInput = (e) => {
    const search = e.target.value;

    this.setState({ search });

    const transactions = this.allTransactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(search.toLowerCase())
    );

    this.setState({ transactions });
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <AddTransactionForm
          form={this.state.form}
          handleTransactionInput={this.handleTransactionInput}
          handleTransactionSubmit={this.handleTransactionSubmit}
        />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
