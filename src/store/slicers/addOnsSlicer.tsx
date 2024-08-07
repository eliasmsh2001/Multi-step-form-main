import { createSlice } from "@reduxjs/toolkit";
import { AddOnStateItem } from "../../types/types";

const addOnslicer = createSlice({
  name: "add-ons",
  initialState: { item: [] as AddOnStateItem[] },
  reducers: {
    onSelectAddOn(state, action) {
      const selectedAddOn: AddOnStateItem = action.payload;
      const existingItem = state.item.findIndex(
        (addon: { addOnTitle: string }) =>
          addon.addOnTitle === selectedAddOn.addOnTitle
      );
      if (existingItem > -1) {
        state.item.splice(existingItem, 1);
      } else if (existingItem === -1) {
        state.item.push(selectedAddOn);
      }
    },
  },
});

export default addOnslicer;
export const addOnsActions = addOnslicer.actions;
