import React from "react";

const Sort = (props) => {
  return (
    <div className="ui fluid">
      <select className="ui dropdown" value={props.sortBy} onChange={props.sortHandler}>
        <option value="description">Description</option>
        <option value="category">Category</option>
      </select>
    </div>
  );
};

export default Sort;
