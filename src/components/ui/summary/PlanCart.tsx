import { Link } from "react-router-dom";
import React from "react";
import { AddOnStateItem, PlanStateItem } from "../../../types/types";
import { currencyFormatter } from "../../../lib/currencyFormatter";

const PlanCart: React.FC<{
  planData: PlanStateItem;
  addOnsData: AddOnStateItem[];
  option: string;
}> = (props) => {
  // #######################
  let planPrice;
  let type: string = "";
  if (props.option === "monthly") {
    planPrice = props.planData.planMonthlyPrice;
    type = "mo";
  }
  if (props.option === "yearly") {
    planPrice = props.planData.planYearlyPrice;
    type = "yr";
  }

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className="bg-alabaster p-3 py-5 md:p-8">
        <div className="flex justify-between items-center mb-1">
          <div>
            <h1 className="text-xl font-bold text-marine_blue">
              {props.planData.planTitle} ({capitalizeFirstLetter(props.option)})
            </h1>
            <Link
              className="text-cool_gray underline font-semibold"
              to={"?mode=select-plan"}
            >
              Change
            </Link>
          </div>
          <h1 className="text-marine_blue font-bold text-lg">
            {currencyFormatter.format(planPrice as number)}/{type}
          </h1>
        </div>
        <div className="w-full h-[.1rem] bg-light_gray my-6"></div>
        <ul className="flex flex-col gap-3">
          {props.addOnsData.map((item) => (
            <li
              key={item.addOnTitle}
              className="w-full flex justify-between items-center"
            >
              <h1 className="text-cool_gray font-semibold">
                {item.addOnTitle}
              </h1>
              <h1 className="text-marine_blue font-semibold">
                +
                {currencyFormatter.format(
                  props.option === "monthly"
                    ? item.addOnMonthlyPrice
                    : item.addOnYearlyPrice
                )}
                /{type}
              </h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PlanCart;
