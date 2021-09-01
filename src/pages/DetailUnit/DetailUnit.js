import React from "react";

function DetailUnit() {
  const id = window.location.pathname.split("/")[2];
  return (
    <div>
      <h4>Detail Unit Page with id : {id}</h4>
    </div>
  );
}

export default DetailUnit;
