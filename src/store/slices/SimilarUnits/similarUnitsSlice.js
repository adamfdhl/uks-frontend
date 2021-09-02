import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const similarUnitsSlice = createSlice({
  name: "similarUnits",
  initialState,
  reducers: {
    updateSimilarUnits: (state, { payload: { units } }) => {
      state.results = units;
    },
    updateIsValidating: (state, { payload: { isValidate } }) => {
      state.isValidating = isValidate;
    },
    resetSimilarUnits: (state) => {
      state.results = [];
    },
  },
});

export const {
  updateSimilarUnits,
  resetSimilarUnits,
  updateIsValidating,
} = similarUnitsSlice.actions;
export const selectSimilarUnits = (state) => state.similarUnits.results;
export const selectIsValidating = (state) => state.similarUnits.isValidating;
export default similarUnitsSlice.reducer;
