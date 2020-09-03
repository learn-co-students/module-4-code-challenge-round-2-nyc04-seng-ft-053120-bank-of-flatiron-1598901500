import React, { Component } from "react";

class AddTransactionForm extends Component {
  state={
    date:"",
    description:"",
    category:"",
    amount:""
  }
  updateState=(event)=>{
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit=()=>{
    let ObjectInput= {
        date: this.state.date, 
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      }
      fetch(`http://localhost:6001/transactions`,{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(ObjectInput)
      })
      .then(r=>r.json())
      .then((newlyCreatedTransaction)=>{
        this.addNewTransaction(newlyCreatedTransaction)
      })
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date}  onChange={this.updateState}/>
            <input type="text" name="description" placeholder="Description"value={this.state.description}  onChange={this.updateState}/>
            <input type="text" name="category" placeholder="Category" value={this.state.value} onChange={this.updateState}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.value}  onChange={this.updateState}
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
