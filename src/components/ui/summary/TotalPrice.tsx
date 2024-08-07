import React from "react";
import { AddOnStateItem, PlanStateItem } from "../../../types/types";

const TotalPrice: React.FC<{
  planData: PlanStateItem;
  addOnsData: AddOnStateItem[];
  option: string;
}> = (props) => {
  let type: string = "";
  let planPrice: number;
  let addonTotalPrice: number;
  let totalPrice: number = 0;
  if (props.option === "monthly") {
    type = "mo";
    planPrice = props.planData.planMonthlyPrice;
    addonTotalPrice = props.addOnsData.reduce((total, item) => {
      return total + item.addOnMonthlyPrice;
    }, 0);
    totalPrice = planPrice + addonTotalPrice;
  }
  if (props.option === "yearly") {
    type = "yr";
    addonTotalPrice = props.addOnsData.reduce((total, item) => {
      return total + item.addOnYearlyPrice;
    }, 0);
    planPrice = props.planData.planYearlyPrice;
    totalPrice = planPrice + addonTotalPrice;
  }

  return (
    <div className="py-8 px-3 md:p-8 flex justify-between items-center">
      <h1 className="text-cool_gray font-semibold">
        Total (per {props.option.slice(0, -2)})
      </h1>
      <h1 className="text-purplish_blue font-bold text-xl">
        +{totalPrice}/{type}
      </h1>
    </div>
  );
};

export default TotalPrice;
