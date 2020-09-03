import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


class AccountContainer extends Component {
  state = {
    transactionData: [], 

    searchValue: '',

    filteredData: []


  }
  handleInputChange = event => {
    const searchBar = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.transactionData.filter(element => {
        //console.log(element)
        return element.description.toLowerCase().includes(searchBar.toLowerCase());
      });

      return {
        searchBar,
        filteredData
      };
    });
  };





  // toHandleSearch = (event) => {
  //   this.setState({searchValue: event.target.value})
  // }


  

  onSubmitBtn =  (evt, stateValue) => {
    evt.preventDefault()
    console.log("something")
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json', 
      },
      body: JSON.stringify(stateValue)

    })
      .then(res => 
        {       
         let updateTransactionData = this.state.transactionData
          updateTransactionData.push(stateValue)
          this.setState({transactionData: updateTransactionData})}
      )
      
        
         
        
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        
    
  
  }


  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then(res => res.json())
      .then(
        (AllTransactions) => {
          this.setState({
            transactionData: AllTransactions,
            filteredData: AllTransactions
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        
      )
  }



  render() {
    console.log(this.state.transactionData)
    return (
      <div>
        <Search toHandleSearch ={this.handleInputChange }/>
        <AddTransactionForm onSubmitBtn={this.onSubmitBtn} />
        <TransactionsList data={this.state.transactionData} searchValue={this.state.searchValue} filteredData={this.state.filteredData}/>
      </div>
    );
  }
}


export default AccountContainer;
