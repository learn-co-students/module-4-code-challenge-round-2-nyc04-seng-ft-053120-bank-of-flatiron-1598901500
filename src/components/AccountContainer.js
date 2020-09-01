import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    search: "",
  };

  //fetch all transactions from the server and set the new state with them
  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((response) => response.json())
      .then((transactions) => {
        this.setState({ transactions });
        this.originalTransactions = [...transactions];
      });
  }

  //handle the incoming form input
  handleSearchInput = (search) => {
    this.setState({ search });
    this.handleTransactionFilter(search);
  };

  //HELPER METHOD handle the filter
  handleTransactionFilter = (search) => {
    const transactions = this.originalTransactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({ transactions });
  };

  //Handle submit  for a new Transaction
  handleFormSubmit = (transaction) => {
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transaction),
    })
      .then((response) => response.json())
      .then((addedTransaction) => {
        this.setState({
          transactions: [...this.state.transactions, addedTransaction],
        });
        this.originalTransactions.push(addedTransaction);
      });
  };

  //handle sorting for description or category
  handleSorting = (e) => {
    const sortBy = e.target.id;

    if (sortBy === "description") {
      this.originalTransactions.sort((a, b) =>
        a.description > b.description ? 1 : -1
      );
      this.setState({ transactions: this.originalTransactions });
    } else {
      this.originalTransactions.sort((a, b) =>
        a.category > b.category ? 1 : -1
      );
      this.setState({ transactions: this.originalTransactions });
    }
  };

  handleDelete = (transactionId) => {
    fetch("http://localhost:6001/transactions/" + transactionId, {
      method: "DELETE",
    })
      .then((res) => res.text())
      .then((res) => this.handleDeleteItem(transactionId));
  };

  handleDeleteItem = (transactionId) => {
    this.originalTransactions = this.originalTransactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    this.setState({ transactions: this.originalTransactions });
  };

  render() {
    return (
      <div>
        <Search
          searchValue={this.state.search}
          handleSearch={this.handleSearchInput}
        />
        <AddTransactionForm addNewTransactionn={this.handleFormSubmit} />
        <TransactionsList
          handleSort={this.handleSorting}
          transactions={this.state.transactions}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default AccountContainer;
