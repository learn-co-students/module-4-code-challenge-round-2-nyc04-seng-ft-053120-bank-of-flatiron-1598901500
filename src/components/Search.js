import React from "react";

const Search = ({ searchValue, handleSearch }) => {
  return (
    <div className="ui large fluid icon input">
      <input
        value={searchValue}
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
