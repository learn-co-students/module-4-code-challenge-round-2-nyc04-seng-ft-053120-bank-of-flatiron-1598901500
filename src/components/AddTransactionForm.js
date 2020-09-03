import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  handleChange = evt =>{
    const target = evt.target;
    const value = target.value;
    const name = target.name;

   if (evt.target.type === "number"){
     this.setState({
       [name]: parseFloat(value)
     })
    }else{
      this.setState({
        [name]: value
      });
    }
   }
  
  handleSubmit = evt =>{
   //console.log(evt.target)

    evt.preventDefault()
    
    const transactionObj = {
    date: this.state.date,
    description: this.state.description,
    category: this.state.category,
    amount: this.state.amount
    }

    fetch("http://localhost:6001/transactions",{
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionObj)
    })
    .then(res => res.json())
    .then(newTransaction => {
      this.props.newTransactionState(newTransaction)
      this.setState({
        date: "",
        description: "",
        category: "",
        amount: ""
      });
    })
    
  }

  render() {
  //console.log("form",this.state)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit} >
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange} />
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
