import React from 'react';
import './SearchBar.css';

const SearchBar = ({ username, setUsername, fetchData, isLimitReached }) => (
  <div className="search-bar-wrapper">
    <input
      type="text"
      className="search-input"
      placeholder="Enter GitHub username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      disabled={isLimitReached}
    />
    <button
      className="search-button"
      onClick={fetchData}
      disabled={isLimitReached}
    >
      {isLimitReached ? 'Limit Reached' : 'Add User'}
    </button>
  </div>
);

export default SearchBar;
