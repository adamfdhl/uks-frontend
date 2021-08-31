import React from "react";
import PropTypes from "prop-types";

import { truncate } from "../../utils/helpers";

import "./SimilarUnit.scss";

function SimilarUnit({ unit }) {
  return (
    <div className="SimilarUnit">
      <div className="DetailUnit">
        <h4>{unit.judul_unit}</h4>
        <h2>{unit.kode_unit}</h2>
        <p>{truncate(unit.deskripsi_unit, 200)}</p>
        <span>{`Tingkat kemiripan : ${unit.similarity_score * 100}%`}</span>
      </div>
    </div>
  );
}

SimilarUnit.propTypes = {
  unit: PropTypes.object,
};

export default SimilarUnit;
