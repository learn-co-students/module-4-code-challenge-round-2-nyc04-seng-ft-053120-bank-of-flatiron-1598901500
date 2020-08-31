import React from "react";

const Sort = ({ handleSort }) => {
  return (
    <select
      name="category"
      id="category"
      className="ui selection dropdown"
      onChange={handleSort}
    >
      <option className="default text" value="" selected disabled>
        Sort By...
      </option>
      <option className="item" value="category">
        Category
      </option>
      <option className="item" value="description">
        Description
      </option>
    </select>
  );
};

export default Sort;
