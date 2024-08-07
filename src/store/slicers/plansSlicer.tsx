import { createSlice } from "@reduxjs/toolkit";

const plansSlicer = createSlice({
  name: "plans",
  initialState: {
    item: {},
    selected: undefined,
    option: "monthly",
  },
  reducers: {
    onToggleBillingOption(state) {
      if (state.option === "monthly") {
        state.option = "yearly";
      } else if (state.option === "yearly") {
        state.option = "monthly";
      }
    },
    onSelectPlan(state, action) {
      const selectedPlan = action.payload;
      state.selected = selectedPlan.planTitle;
      state.item = selectedPlan;
    },
  },
});

export default plansSlicer;
export const plansSlicerActions = plansSlicer.actions;
