import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort";

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

  // Handles sort based on the criteria user selected
  handleSort = (e) => {
    const criteria = e.target.value;

    const transactions = [...this.state.transactions].sort(
      (transactionA, transactionB) => {
        if (
          transactionA[criteria].toLowerCase() <
          transactionB[criteria].toLowerCase()
        )
          return -1;
        if (
          transactionA[criteria].toLowerCase() >
          transactionB[criteria].toLowerCase()
        )
          return 1;
        return 0;
      }
    );

    this.setState({ transactions });
  };

  // Handles transaction deletion, takes in a transaction object, make delete request, update state
  handleDeleteTransaction = (transaction) => {
    const transactionId = transaction.id;

    fetch("http://localhost:6001/transactions/" + transactionId, {
      method: "DELETE",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    })
      .then((response) => response.json())
      .then((_) => {
        const transactions = this.state.transactions.filter(
          (t) => t.id !== transactionId
        );
        this.setState({ transactions });
      });
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
        <Sort handleSort={this.handleSort} />
        <TransactionsList
          transactions={this.state.transactions}
          handleDeleteTransaction={this.handleDeleteTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;
