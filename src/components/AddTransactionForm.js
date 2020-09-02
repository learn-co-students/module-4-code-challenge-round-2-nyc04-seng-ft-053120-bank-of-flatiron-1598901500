import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    amount: 0,
    category: "",
    date: "",
    description: "" 
  }

  handleChange = (e) => {
    console.log("this was changed?")
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // input needs to be sent to the back >> then update the current transactions array
  handleSubmit = (e) => {
    e.preventDefault()
    // this will grab the new obj and create a new fetch to the back end
    const {date, description, category, amount} = this.state
     fetch("http://localhost:6001/transactions",{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        // theres probably a better way
        date: date,
        description: description,
        category: category,
        amount: amount
      })
    })
    .then(resp => resp.json())
    .then(newTran=> this.props.newTran(newTran)) 
  }
  
  

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.name} onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description" value={this.state.name} onChange={this.handleChange}/>
            <input type="text" name="category" placeholder="Category" value={this.state.name} onChange={this.handleChange}/>
            <input
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
