import React from "react";

const Search = (props) => {
console.log(props)

// onchange needs to send back the search input/ inorder to update state in A.C
  let handleChange = (e) =>  {props.searchInput(e.target.value)}
  

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value= {props.searchValue}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
