import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import ValidationResults from "../../components/ValidationResults/ValidationResults";
import TableUnit from "../../components/TableUnit/TableUnit";

function Home(props) {
  return (
    <>
      <SearchBar />
      <ValidationResults />
      <TableUnit />
    </>
  );
}

export default Home;
