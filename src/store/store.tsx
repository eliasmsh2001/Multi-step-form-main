import { configureStore } from "@reduxjs/toolkit";
import plansSlicer from "./slicers/plansSlicer";
import addOnslicer from "./slicers/addOnsSlicer";

const store = configureStore({
  reducer: {
    plans: plansSlicer.reducer,
    addOns: addOnslicer.reducer,
  },
});

export default store;
