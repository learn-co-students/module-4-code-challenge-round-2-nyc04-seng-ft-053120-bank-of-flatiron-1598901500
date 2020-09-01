import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  handleChange = (evt) => {
    let {name,value} = evt.target
    this.setState((prevState) => ({
      [name]:value
    }))
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    let newTransaction = this.state

    fetch ("http://localhost:6001/transactions", {
      method:"POST",
      headers:{
         "content-type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
      .then(resp => resp.json())
      .then((newlyCreatedTransaction) => {
       this.props.addOneTransaction(newlyCreatedTransaction)
     })
  }



  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value= {this.state.date} onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description" value= {this.state.description} onChange={this.handleChange}/>
            <input type="text" name="category" placeholder="Category" value= {this.state.category} onChange={this.handleChange}/>
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
