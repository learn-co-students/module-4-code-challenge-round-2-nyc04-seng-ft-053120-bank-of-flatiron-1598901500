import React from "react";

const Search = ({searchTerm, handleSearch}) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={e => {handleSearch(e.target.value)}}
        value={searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;