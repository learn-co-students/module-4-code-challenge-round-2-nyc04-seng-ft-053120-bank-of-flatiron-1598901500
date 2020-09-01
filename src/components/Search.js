import React, { Component } from 'react';

class Search extends Component {

  searchFilter = (event) => {
    this.props.handleFilter(event.target.value);
  };

  handleChange(event) {
    debugger
    this.props.handleFilter(event.target.value)
    // this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={'Search your Recent Transactions'}
          onChange={(event) => {
            this.handleChange(event)
            debugger
            console.log('Searching...');
          }}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  }
};

export default Search;
