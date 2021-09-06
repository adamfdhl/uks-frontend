import React from "react";

import "./ColorHelper.scss";

function ColorHelper() {
  return (
    <div className="ColorHelper">
      <h4>Keterangan:</h4>
      <div className="ColorHelper--item">
        <div className="green" />
        <p>Memiliki Kemiripan diatas 65%</p>
      </div>
      <div className="ColorHelper--item">
        <div className="orange" />
        <p>Memiliki Kemiripan diantara 50% sampai 65%</p>
      </div>
      <div className="ColorHelper--item">
        <div className="red" />
        <p>Memiliki kemiripan dibawah 50%</p>
      </div>
    </div>
  );
}

export default ColorHelper;
