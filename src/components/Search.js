import React from "react";

const Search = ({ search, handleSearchInput, handleSearchSubmit }) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={search}
        onChange={handleSearchInput}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
