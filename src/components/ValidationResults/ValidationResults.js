import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import SimilarUnit from "../SimilarUnit/SimilarUnit";

function ValidationResults() {
  const history = useHistory();

  const dummyUnit = [
    {
      kode_unit: "1",
      judul_unit: "Membuat aplikasi mobile",
      deskripsi_unit:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      similarity_score: 0.65,
    },
    {
      kode_unit: "2",
      judul_unit: "Membuat program",
      deskripsi_unit:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      similarity_score: 0.54,
    },
    {
      kode_unit: "3",
      judul_unit: "Membuat arsitektur",
      deskripsi_unit:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      similarity_score: 0.51,
    },
    {
      kode_unit: "4",
      judul_unit: "Membuat internet",
      deskripsi_unit:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      similarity_score: 0.45,
    },
    {
      kode_unit: "5",
      judul_unit: "Membuat lampu",
      deskripsi_unit:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      similarity_score: 0.33,
    },
  ];

  const handleRedirectDetailUnit = useCallback(
    (id_unit) => () => {
      history.push("/detail/" + id_unit);
    },
    [history]
  );

  const isShow = true;

  return isShow ? (
    <div>
      <h4>Similar Results</h4>
      {dummyUnit.map((unit, idx) => (
        <SimilarUnit
          key={idx}
          unit={unit}
          onClick={handleRedirectDetailUnit(unit.kode_unit)}
        />
      ))}
    </div>
  ) : null;
}

export default React.memo(ValidationResults);
