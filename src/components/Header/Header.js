import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  return (
    <div className="Header">
      <Link to="/">Unit Kompetensi Search</Link>
    </div>
  );
}

export default Header;
