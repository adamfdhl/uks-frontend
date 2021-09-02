import { configureStore } from "@reduxjs/toolkit";
import similarUnitsReducer from "./slices/SimilarUnits/similarUnitsSlice";

const store = configureStore({
  reducer: {
    similarUnits: similarUnitsReducer,
  },
});

export default store;
