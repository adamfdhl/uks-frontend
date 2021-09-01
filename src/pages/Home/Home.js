import React from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import ValidationResults from "../../components/ValidationResults/ValidationResults";

function Home(props) {
  return (
    <>
      <SearchBar />
      <ValidationResults />
    </>
  );
}

export default Home;
