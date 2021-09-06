import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import SearchBar from "../../components/SearchBar/SearchBar";
import ValidationResults from "../../components/ValidationResults/ValidationResults";
import TableUnit from "../../components/TableUnit/TableUnit";

import {
  updateIsValidating,
  selectSimilarUnits,
  selectIsValidating,
} from "../../store/slices/SimilarUnits/similarUnitsSlice";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const similarUnits = useSelector(selectSimilarUnits);
  const isValidating = useSelector(selectIsValidating);

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
      <ValidationResults
        similarUnits={similarUnits}
        isValidating={isValidating}
      />
      {similarUnits.length === 0 && <TableUnit />}
    </>
  );
}

export default Home;
