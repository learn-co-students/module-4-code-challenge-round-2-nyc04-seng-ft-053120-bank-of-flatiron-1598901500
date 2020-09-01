import React from "react";

const Sort = (props) => {
  const handleOrderChange = e => {
    props.updateSortOrder(e.target.value);
  }

  const handleSortChange = e => {
    props.updateSortBy(e.target.name);
  }

  const { sortBy } = props;

  return (
    <div className="ui segment">
      <div className="ui secondary menu">
        <div className="header item">Sort By</div>
        <a className={`item ${sortBy === 'default' ? 'active' : ""}`} name="default" onClick={handleSortChange}>
          Default
        </a>
        <a className={`item ${sortBy === 'description' ? 'active' : ""}`} name="description" onClick={handleSortChange}>
          Description
        </a>
        <a className={`item ${sortBy === 'category' ? 'active' : ""}`} name="category" onClick={handleSortChange}>
          Category
        </a>
        <div className="item">
          <select className="ui dropdown" onChange={handleOrderChange}>
            <option value="asc">ASC</option>
            <option value="dsc">DSC</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Sort;
