import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./DetailUnit.scss";

function DetailUnit() {
  const [unit, setUnit] = useState(null);
  const [elemen, setElemen] = useState(null);
  const history = useHistory();
  const id = window.location.pathname.split("/")[2];

  const goBackHandler = useCallback(() => {
    history.push("/");
  }, [history]);

  const getDetailUnit = useCallback((idUnit) => {
    axios
      .get(`${process.env.REACT_APP_DEVELOPMENT_API_URL}/unit/${idUnit}`)
      .then((response) => {
        if (response.status === 200) {
          setUnit(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getElemenUnit = useCallback((idUnit) => {
    axios
      .get(`${process.env.REACT_APP_DEVELOPMENT_API_URL}/elemen/${idUnit}`)
      .then((response) => {
        if (response.status === 200) {
          setElemen(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getDetailUnit(id);
    getElemenUnit(id);
  }, [getDetailUnit, getElemenUnit, id]);

  return (
    <div className="DetailUnit">
      {unit ? (
        <>
          <button onClick={goBackHandler} className="go-back">
            Kembali
          </button>
          <div className="DetailUnit__info">
            <h1 className="DetailUnit__info--title">{unit.judul_unit}</h1>
            <h3 className="DetailUnit__info--kode">{unit.kode_unit}</h3>
            <p className="DetailUnit__info--deskripsi">{unit.deskripsi_unit}</p>
          </div>
        </>
      ) : null}
      {elemen ? (
        <div>
          <p>Elemen Kompetensi:</p>
          {elemen.map((item, idx) => (
            <li key={idx}>{item.elemen_kompetensi}</li>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default DetailUnit;
