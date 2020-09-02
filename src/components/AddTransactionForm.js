import React, { Component } from "react";

class AddTransactionForm extends Component {
  // SET STATE FOR FORM
  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  // HANDLE INPUTS & setSTATE
  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // NOW WE NEED TO HANDLE SUBMIT AAAHHHHHHHH!!!!!!!!!! HALPPPP!!! :S
  handleSubmit =(e) => {
    // console.log(e)
    e.preventDefault()
    // DO IT SAME WAY AS WE HAVE IT IN THE BACKEND
    let newTrans = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }
    // FETCH POST REQUEST
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newTrans)
    })
    .then(r => r.json())
    .then(newTransaction => {
      // BUILD ADD TRANSACTION IN ACCOUNT CONTAINER
      this.props.addTransaction(newTransaction)
    })
  }

  render() {
    console.log(this.state.value)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" 
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input type="text" name="description" placeholder="Description" 
              value={this.state.description}
              onChange={this.handleChange}
            />
            <input type="text" name="category" placeholder="Category" 
              value={this.state.category}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleChange}
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
