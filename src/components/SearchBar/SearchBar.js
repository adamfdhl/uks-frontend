import React, { useState } from "react";

import "./SearchBar.scss";

import FilterIcon from "../../assets/filter_icon.svg";

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filterOptions = [
    {
      id: 1,
      value: "unit_kompetensi",
      text: "Unit Kompetensi",
    },
    {
      id: 2,
      value: "elemen_kompetensi",
      text: "Elemen Kompetensi",
    },
  ];

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const applyFilter = (selectedId) => () => {
    setSelectedFilter(selectedId);
    setShowDropdown(false);
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
        <div className="container-button">
          <div className="container-dropdown">
            <div className="Dropdown">
              <button className="Dropdown__btn" onClick={toggleDropdown}>
                <img src={FilterIcon} alt="filter icon" />
                Filter
              </button>
              {showDropdown && (
                <div className="Dropdown__content">
                  {filterOptions.map((ops) => (
                    <li key={ops.id} onClick={applyFilter(ops.id)}>
                      {ops.text}
                    </li>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button type="button" disabled={!query}>
            Submit
          </button>
        </div>
      </div>
      {selectedFilter && (
        <p>Filter : {filterOptions[selectedFilter - 1].text}</p>
      )}
    </div>
  );
}

export default SearchBar;
