import React, { Component } from 'react';

class Search extends Component {

  // searchFilter = (event) => {
  //   this.props.handleFilter(event.target.value);
  // };

  handleChange(event) {
    this.props.handleFilter(event.target.value)
    this.props.filterTransactions();
  }

  render() {

    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={'Search your Recent Transactions'}
          onChange={(event) => {
            this.props.searchFilter(event);
            console.log('Searching...');
          }}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  }
};

export default Search;
