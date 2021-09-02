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

  useEffect(() => {
    setUnit({
      kode_unit: "4",
      judul_unit: "Membuat internet",
      deskripsi_unit:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      similarity_score: 0.45,
    });
    setElemen([
      {
        id_unit: 4,
        elemen_kompetensi: "Merencanakaan dan mempersiapkan pekerjaan",
      },
      {
        id_unit: 4,
        elemen_kompetensi: "Merencanakaan dan mempersiapkan pekerjaan",
      },
      {
        id_unit: 4,
        elemen_kompetensi: "Merencanakaan dan mempersiapkan pekerjaan",
      },
      {
        id_unit: 4,
        elemen_kompetensi: "Merencanakaan dan mempersiapkan pekerjaan",
      },
    ]);
  }, []);

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
