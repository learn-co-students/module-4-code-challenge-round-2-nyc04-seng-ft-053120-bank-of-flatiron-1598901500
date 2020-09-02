import React, { Component } from "react";



class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount:  ""
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
     console.log('hello')

     fetch("http://localhost:6001/transactions", {
       method: "POST",
       headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
       })
     })
     .then(res=> res.json())
     .then(newTrans => {this.props.updateTransaction(newTrans)})
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleChange}  value ={this.state.date}/>
            <input type="text" name="description" placeholder="Description" onChange={this.handleChange} value ={this.state.description}/>
            <input type="text" name="category" placeholder="Category" onChange={this.handleChange} value ={this.state.category}/>
            <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={this.handleChange} value ={this.state.amount}/>
          </div>
          <button className="ui button" type="submit" onClick={this.handleSubmit}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
