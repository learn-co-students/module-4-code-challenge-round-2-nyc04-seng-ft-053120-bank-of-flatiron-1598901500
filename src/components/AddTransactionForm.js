import React, { Component } from "react";


// Get user input
// - set state of form
// - connect state with form....controlled inputs
// - update state with this.setState
// - onChangeHandler
// POST request on submit
// Pass function from parent AccountContainer to AddTransactionForm
// - and call it to reflect changes with setState

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  handleChange = (evt) => {
    const target = evt.target
    const value = target.value
    const name = target.name

    // [name] by assgining target.name to name will allow dynamic accessing. same with value
    this.setState({
      [name]: value
    });
  }

  //POST request
  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(evt.target.value)

    //need call back function from parent
    // fetch("http://localhost:6001/transactions", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     //should strigify the and object or value

    //   })
    // })

  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange}/>
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
