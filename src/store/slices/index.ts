import { combineReducers } from "@reduxjs/toolkit";

import exampleSliceReducer from "./exampleSlice";
import uiSlice from "./uiSlice";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import filterSlice from "./filterSlice";

const rootReducer = combineReducers({
  example: exampleSliceReducer,
  ui: uiSlice,
  user: userSlice,
  product: productSlice,
  filter: filterSlice,
});

export default rootReducer;
