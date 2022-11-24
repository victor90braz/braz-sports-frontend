import { configureStore } from "@reduxjs/toolkit";
import sliceEvents from "../features/sliceEvents/sliceEvents";

const store = configureStore({
  reducer: { event: sliceEvents },
});

export default store;
