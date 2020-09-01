import React from "react";

const Search = (props) => {
  const handleInputChange = e => {
    props.updateSearch(e.target.value)
  }
  
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.search}
        onChange={handleInputChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
