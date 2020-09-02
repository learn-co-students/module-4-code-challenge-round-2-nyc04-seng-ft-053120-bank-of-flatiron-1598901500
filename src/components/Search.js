import React from "react";

const Search = (props) => {

  const searchHelper = (e) => {
       
     props.searchHandler(e.target.value)

  }


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value = {props.search}
        onChange= {searchHelper}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
