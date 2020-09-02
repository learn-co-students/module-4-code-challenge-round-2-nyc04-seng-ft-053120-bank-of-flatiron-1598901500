import React from "react";

const Search = (props) => {

  let handleChange = evt => {
    // console.log(evt.target.value)
    //parent sent up changeSearch to get input from user
     props.changeSearch(evt.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.search}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
