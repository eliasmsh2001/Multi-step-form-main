import React from "react";
import { AddOn, AddOnState, PlanState } from "../../../types/types";
import clsx from "clsx";
import { currencyFormatter } from "../../../lib/currencyFormatter";
import { useSelector, useDispatch } from "react-redux";
import { addOnsActions } from "../../../store/slicers/addOnsSlicer";
import { motion } from "framer-motion";

const AddOnItem: React.FC<{ addOn: AddOn }> = (props) => {
  const selectedAddOn = useSelector((state: AddOnState) => state.addOns.item);
  const billingOption = useSelector((state: PlanState) => state.plans.option);
  const dispatch = useDispatch();
  let addOnPrice;
  let type;
  if (billingOption === "monthly") {
    addOnPrice = props.addOn.monthlyPrice;
    type = "mo";
  }
  if (billingOption === "yearly") {
    addOnPrice = props.addOn.yearlyPrice;
    type = "yr";
  }

  const selectAddOnHandler = () => {
    dispatch(
      addOnsActions.onSelectAddOn({
        addOnTitle: props.addOn.title,
        addOnMonthlyPrice: props.addOn.monthlyPrice,
        addOnYearlyPrice: props.addOn.yearlyPrice,
      })
    );
  };

  return (
    <motion.li
      whileHover={{
        scale: 1.05,
        transition: { stiffness: 350, type: "spring" },
      }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      onClick={selectAddOnHandler}
      className={clsx(
        "flex items-center justify-between md:h-24 lg:h-20 py-2 px-5 w-full border-2 border-light_gray  rounded-xl cursor-pointer",
        {
          "border-purplish_blue bg-magnolia": selectedAddOn.find(
            (item) => item.addOnTitle === props.addOn.title
          ),
        }
      )}
    >
      <div className="flex justify-center items-center gap-4">
        <span
          className={clsx(
            "block size-6 rounded-md border-2 border-light_gray",
            {
              "border-0 bg-checkmark bg-purplish_blue bg-contain bg-no-repeat bg-center":
                selectedAddOn.find(
                  (item) => item.addOnTitle === props.addOn.title
                ),
            }
          )}
        ></span>
        <div>
          <h1 className="text-marine_blue font-bold">{props.addOn.title}</h1>
          <h2 className="text-cool_gray font-semibold">
            {props.addOn.description}
          </h2>
        </div>
      </div>
      <p className="text-purplish_blue font-semibold">
        +{currencyFormatter.format(addOnPrice as number)}/{type}
      </p>
    </motion.li>
  );
};

export default AddOnItem;
