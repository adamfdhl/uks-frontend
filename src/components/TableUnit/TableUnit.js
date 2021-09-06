import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { truncate } from "../../utils/helpers";

import "./TableUnit.scss";

function TableUnit(props) {
  const [listUnit, setListUnit] = useState(null);
  const history = useHistory();

  const getListUnit = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_DEVELOPMENT_API_URL}/units`)
      .then((response) => {
        if (response.status === 200) {
          setListUnit(response.data.unit);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getListUnit();
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
            <th>SKKNI</th>
            <th>Kode Unit</th>
            <th>Judul Unit</th>
          </tr>
        </thead>
        <tbody>
          {listUnit.map((unit) => (
            <tr key={unit.id_unit}>
              <td>{truncate(unit.skkni.skkni, 50)}</td>
              <td>{unit.kode_unit}</td>
              <td>{truncate(unit.judul_unit, 25)}</td>
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
