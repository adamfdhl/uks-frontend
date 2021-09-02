import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { dummyListUnit } from "../../AppConstants/constants";
import { truncate } from "../../utils/helpers";

import "./TableUnit.scss";

function TableUnit(props) {
  const [listUnit, setListUnit] = useState(null);
  const history = useHistory();

  const getListUnit = useCallback(() => {
    console.log(process.env.REACT_APP_DEVELOPMENT_API_URL);
    axios
      .get(`${process.env.REACT_APP_DEVELOPMENT_API_URL}/units`)
      .then((resposne) => {
        console.log(resposne);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getListUnit();
    setListUnit(dummyListUnit);
  }, [getListUnit]);

  const goToDetailUnit = useCallback(
    (idUnit) => () => {
      history.push(`/detail/${idUnit}`);
    },
    [history]
  );

  return listUnit ? (
    <div className="TableUnit">
      <table>
        <thead>
          <tr>
            <th>Kode Unit</th>
            <th>Judul Unit</th>
            <th>Deskripsi Unit</th>
          </tr>
        </thead>
        <tbody>
          {listUnit.map((unit) => (
            <tr key={unit.id_unit}>
              <td>{unit.kode_unit}</td>
              <td>{truncate(unit.judul_unit, 25)}</td>
              <td>{truncate(unit.deskripsi_unit, 50)}</td>
              <td>
                <button onClick={goToDetailUnit(unit.id_unit)}>
                  Lihat Detail Unit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
}

export default TableUnit;
