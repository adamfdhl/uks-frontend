import React, { useState } from "react";

import "./SearchBar.scss";

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filterOptions = [
    {
      value: "unit_kompetensi",
      text: "Unit Kompetensi",
    },
    {
      value: "elemen_kompetensi",
      text: "Elemen Kompetensi",
    },
  ];

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  return (
    <div className="SearchBar">
      <h4>Cari Unit Kompetensi</h4>
      <div className="container">
        <input
          type="text"
          placeholder="Ketik di sini..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="Dropdown">
          <button className="Dropdown__btn" onClick={toggleDropdown}>
            Filter
          </button>
          {showDropdown && (
            <div className="Dropdown__content">
              {filterOptions.map((ops, idx) => (
                <li key={idx} onClick={() => setSelectedFilter(ops.value)}>
                  {ops.text}
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
