import React from 'react';
import '../App.css';

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      className="search-input"
    />
  );
};

export default SearchInput;