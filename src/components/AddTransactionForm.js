import React, { Component } from "react";

class AddTransactionForm extends Component {

constructor(){
  super()
   this.state = {
     date: '',
     description:'',
     category:'',
     amount:''
   }
}

inputHandler =(e) => {

this.setState({
   
   [e.target.name]: [e.target.value]


})

}



submitHandler =(e) => {

  e.preventDefault()

  this.props.addNewTrans(this.state)


}


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange = {this.inputHandler}  value = {this.state.date}/>
            <input type="text" name="description" placeholder="Description"  onChange = {this.inputHandler} value = {this.state.description} />
            <input type="text" name="category" placeholder="Category"  onChange = {this.inputHandler}  value={this.state.category}     />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange = {this.inputHandler}
              value= {this.state.amount}
            />
          </div>
          <button onSubmit={this.submitHandler} className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
