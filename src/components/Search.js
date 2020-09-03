import React from "react";

const Search = (props) => {
  let changeHandler = evt =>{
    props.changeSearchItem(evt.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchItem}
        onChange={changeHandler}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
