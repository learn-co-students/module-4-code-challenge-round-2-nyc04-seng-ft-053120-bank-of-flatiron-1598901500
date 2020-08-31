import React from "react";

const Search = (props) => {
  return (
    <div>
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={(event) => {
            props.getSearchTerm(event.target.value);
          }}
        />
        <i className="circular search link icon"></i>
      </div>
      <div>
        <button name="description" onClick={(event) => {props.sort(event.target.name)}} >Sort by Description</button>
        <button name="category" onClick={(event) => {props.sort(event.target.name)}} >Sort by Category</button>
      </div>
    </div>
  );
};

export default Search;
