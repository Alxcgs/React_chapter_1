import React from "react";

const SearchInput = ({ searchQuery, onSearchChange }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search tasks..."
      value={searchQuery}
      onChange={onSearchChange}
    />
  );
};

export default SearchInput;