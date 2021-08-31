import React from "react";
import PropTypes from "prop-types";

import { truncate, getSimilarityColor } from "../../utils/helpers";

import "./SimilarUnit.scss";

function SimilarUnit({ unit }) {
  return (
    <div className="SimilarUnit">
      <div className="DetailUnit">
        <h4>{unit.judul_unit}</h4>
        <h2>{unit.kode_unit}</h2>
        <p>{truncate(unit.deskripsi_unit, 200)}</p>
        <div className="similarity_container">
          <p className="DetailUnit__similarity">
            Tingkat kemiripan :
            <span
              style={{
                backgroundColor: getSimilarityColor(unit.similarity_score),
                borderRadius: "5px",
                padding: "5px 10px",
                marginLeft: "5px",
              }}
            >
              {unit.similarity_score * 100}%
            </span>
          </p>
          <p className="DetailUnit__seemore">
            Click untuk menuju detail unit lebih lanjut ->
          </p>
        </div>
      </div>
    </div>
  );
}

SimilarUnit.propTypes = {
  unit: PropTypes.object,
};

export default SimilarUnit;
