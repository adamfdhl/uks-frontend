import React, { useEffect } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import ValidationResults from "../../components/ValidationResults/ValidationResults";
import TableUnit from "../../components/TableUnit/TableUnit";

import { updateIsValidating } from "../../store/slices/SimilarUnits/similarUnitsSlice";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateIsValidating({
        isValidate: false,
      })
    );
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      <ValidationResults />
      <TableUnit />
    </>
  );
}

export default Home;
