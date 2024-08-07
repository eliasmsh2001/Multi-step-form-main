import clsx from "clsx";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { plansSlicerActions } from "../../../store/slicers/plansSlicer";
import { PlanState } from "../../../types/types";

const BillingOptions: React.FC = () => {
  const option = useSelector((state: PlanState) => state.plans.option);
  const dispatch = useDispatch();
  const choiceClass = {
    monthlyClass: clsx(
      "font-semibold transition-all duration-200 ease-in-out",
      {
        "text-marine_blue": option === "monthly",
        "text-cool_gray": option !== "monthly",
      }
    ),
    yearlyClass: clsx("font-semibold transition-all duration-200 ease-in-out", {
      "text-marine_blue": option === "yearly",
      "text-cool_gray": option !== "yearly",
    }),
  };

  const onToggleOption = () => {
    dispatch(plansSlicerActions.onToggleBillingOption());
  };

  return (
    <div className="w-full h-12 flex justify-center gap-4 items-center bg-magnolia my-2 ">
      <h1 className={choiceClass.monthlyClass}>Monthly</h1>
      <button
        onClick={onToggleOption}
        className="w-12 h-6 bg-marine_blue rounded-xl flex items-center justify-center "
      >
        <span
          className={clsx(
            "size-4 block bg-alabaster rounded-3xl transition-all duration-200 ease-in-out",
            {
              "-translate-x-3": option === "monthly",
              "translate-x-3": option === "yearly",
            }
          )}
        ></span>
      </button>
      <h1 className={choiceClass.yearlyClass}>Yearly</h1>
    </div>
  );
};

export default BillingOptions;
