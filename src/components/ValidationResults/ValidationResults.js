import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import SimilarUnit from "../SimilarUnit/SimilarUnit";
import Loader from "../../commons/Loader/Loader";
import {
  selectSimilarUnits,
  selectIsValidating,
} from "../../store/slices/SimilarUnits/similarUnitsSlice";

function ValidationResults() {
  const history = useHistory();

  const similarUnits = useSelector(selectSimilarUnits);
  const isValidating = useSelector(selectIsValidating);

  const handleRedirectDetailUnit = useCallback(
    (id_unit) => () => {
      history.push("/detail/" + id_unit);
    },
    [history]
  );

  return (
    <>
      {isValidating && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "15px 0",
          }}
        >
          <Loader />
          <p style={{ marginLeft: "15px" }}>
            Loading... Please wait it might need several minutes...
          </p>
        </div>
      )}
      {similarUnits.length !== 0 ? (
        <div>
          <h4>Similar Results</h4>
          {similarUnits.map((unit, idx) => (
            <SimilarUnit
              key={idx}
              unit={unit}
              onClick={handleRedirectDetailUnit(unit.id_unit)}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}

export default React.memo(ValidationResults);
