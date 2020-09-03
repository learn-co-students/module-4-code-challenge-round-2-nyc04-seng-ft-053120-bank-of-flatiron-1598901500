import React from "react";
const Search = (props) => {
 
// let handleUserSearchInput = (event) => {
//     let userInput = event.target.value
//     console.log(userInput)
//    props.filterSearchInput(userInput)
//   }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"} 
        onChange={props.filterSearchInput}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
