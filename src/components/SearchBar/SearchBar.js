import React, { useCallback, useMemo, useState } from "react";
import axios from "axios";

import "./SearchBar.scss";

import FilterIcon from "../../assets/filter_icon.svg";
import { useDispatch } from "react-redux";
import {
  updateSimilarUnits,
  updateIsValidating,
} from "../../store/slices/SimilarUnits/similarUnitsSlice";

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const filterOptions = useMemo(
    () => [
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
    ],
    []
  );

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const applyFilter = (selectedId) => () => {
    setSelectedFilter(selectedId);
    setShowDropdown(false);
  };

  const getSimilarUnits = useCallback(() => {
    const data = {
      query: query,
      filter: selectedFilter ? filterOptions[selectedFilter - 1].value : null,
    };
    dispatch(
      updateIsValidating({
        isValidate: true,
      })
    );
    axios
      .post(`${process.env.REACT_APP_DEVELOPMENT_API_URL}/validate`, data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(
            updateSimilarUnits({
              units: response.data.result,
            })
          );
          dispatch(
            updateIsValidating({
              isValidate: false,
            })
          );
        }
      })
      .catch((error) => {
        dispatch(
          updateIsValidating({
            isValidate: false,
          })
        );
        console.log(error);
      });
  }, [query, filterOptions, selectedFilter, dispatch]);

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
          <button type="button" disabled={!query} onClick={getSimilarUnits}>
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
