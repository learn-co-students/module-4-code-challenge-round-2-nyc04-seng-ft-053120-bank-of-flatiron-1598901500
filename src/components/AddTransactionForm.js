import React, { Component } from "react";

class AddTransactionForm extends Component {
  
  state ={date: '', description: '', category: '', amount: ''}

 // FormState = () =>({date: '', description: '', category: '', amount: ''})

  toHandleChange =  (event) => { 
    this.setState({
      date: event.target.value
    })
  }
  
  toHandleChange2 =  (event) => { 
    this.setState({
      description: event.target.value
    })
  }

  toHandleChange3 =  (event) => { 
    this.setState({
      category: event.target.value
    })
  }

  toHandleChange4 =  (event) => { 
    this.setState({
      amount: event.target.value
    })
  }

 
  
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(evt) => this.props.onSubmitBtn(evt, this.state)} className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange={this.toHandleChange}/>
            <input type="text" name="description" placeholder="Description" onChange={this.toHandleChange2} />
            <input type="text" name="category" placeholder="Category" onChange={this.toHandleChange3} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.toHandleChange4}/>
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
