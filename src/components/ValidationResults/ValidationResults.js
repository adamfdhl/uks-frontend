import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import SimilarUnit from "../SimilarUnit/SimilarUnit";
import Loader from "../../commons/Loader/Loader";
import ColorHelper from "./ColorHelper";

function ValidationResults({ similarUnits, isValidating }) {
  const history = useHistory();

  const handleRedirectDetailUnit = useCallback(
    (id_unit) => () => {
      history.push("/detail/" + id_unit);
    },
    [history]
  );

  return (
    <>
      {isValidating && similarUnits.length === 0 && (
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
          <hr style={{ margin: "10px 0" }} />
          <h4 style={{ fontWeight: 700, margin: "10px 0" }}>Similar Results</h4>
          <hr style={{ margin: "10px 0" }} />
          <ColorHelper />
          {isValidating ? (
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
          ) : (
            <>
              {similarUnits.map((unit, idx) => (
                <SimilarUnit
                  key={idx}
                  unit={unit}
                  onClick={handleRedirectDetailUnit(unit.id_unit)}
                />
              ))}
            </>
          )}
        </div>
      ) : null}
    </>
  );
}

export default React.memo(ValidationResults);
