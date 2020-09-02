import React from "react";

class Search extends React.Component {

  helpWithSearch = (e) => {
    this.props.handleSearchChange(e.target.value)
  }

  render() {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={this.props.searchTerm}
        onChange={this.helpWithSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  )}
}


export default Search;
