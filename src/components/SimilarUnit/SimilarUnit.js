import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { truncate, getSimilarityColor } from "../../utils/helpers";

import "./SimilarUnit.scss";

function SimilarUnit({ unit, onClick }) {
  const isUnitResult = useMemo(() => {
    if (unit) {
      if (unit.elemen_kompetensi) return false;
      return true;
    }
  }, [unit]);

  return (
    <div className="SimilarUnit" onClick={onClick}>
      <div className="DetailUnit">
        {isUnitResult ? (
          <>
            <h1 style={{ fontWeight: 700, fontSize: "20px", margin: "5px 0" }}>
              {unit.skkni.skkni}
            </h1>
            <h4 style={{ fontWeight: 500, fontSize: "16px", margin: "5px 0" }}>
              {unit.kode_unit} - {unit.judul_unit}
            </h4>
            <p>{truncate(unit.deskripsi_unit, 200)}</p>
          </>
        ) : (
          <>
            <h1 style={{ fontWeight: 700, fontSize: "20px", margin: "5px 0" }}>
              {unit.skkni.skkni}
            </h1>
            <h2>{unit.elemen_kompetensi}</h2>
          </>
        )}

        <div className="similarity_container">
          <p className="DetailUnit__similarity">
            Tingkat kemiripan
            <span
              style={{
                backgroundColor: getSimilarityColor(unit.similarity_score),
                borderRadius: "5px",
                padding: "5px 10px",
                marginLeft: "5px",
              }}
            >
              {unit.similarity_score.toFixed(4) * 100}%
            </span>
          </p>
          <p className="DetailUnit__seemore">
            Click untuk menuju detail unit lebih lanjut
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
