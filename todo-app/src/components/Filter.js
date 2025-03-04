import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div className="filter-container">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="filter-select"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Filter;
