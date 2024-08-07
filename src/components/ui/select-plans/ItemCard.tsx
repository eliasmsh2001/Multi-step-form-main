import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Plan, PlanState } from "../../../types/types";
import clsx from "clsx";
import { currencyFormatter } from "../../../lib/currencyFormatter";
import { plansSlicerActions } from "../../../store/slicers/plansSlicer";
import { motion, AnimatePresence } from "framer-motion";

const ItemCard: React.FC<{ plan: Plan }> = (props) => {
  const option = useSelector((state: PlanState) => state.plans.option);
  const selectedPlan = useSelector((state: PlanState) => state.plans.selected);
  const dispatch = useDispatch();
  let price;

  if (option === "monthly") {
    price = currencyFormatter.format(props.plan.monthlyPrice);
  } else if (option === "yearly") {
    price = currencyFormatter.format(props.plan.yearlyPrice);
  }

  const selectPlanHandeler: () => void = () => {
    dispatch(
      plansSlicerActions.onSelectPlan({
        planTitle: props.plan.title,
        planMonthlyPrice: props.plan.monthlyPrice,
        planYearlyPrice: props.plan.yearlyPrice,
      })
    );
  };

  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 350 }}
      onClick={selectPlanHandeler}
      className={clsx(
        "md:h-44 md:w-40 border-2 p-4 border-light_gray hover:border-purplish_blue rounded-lg flex md:flex-col md:justify-between gap-5 md:gap-0 cursor-pointer",
        {
          "border-purplish_blue bg-magnolia": selectedPlan === props.plan.title,
        }
      )}
    >
      <img className="size-10" src={props.plan.icon} alt={props.plan.title} />
      <motion.div layout>
        <motion.h1
          layout
          className="font-bold text-marine_blue text-sm md:text-base"
        >
          {props.plan.title}
        </motion.h1>
        <motion.p layout className="text-cool_gray text-xs md:text-base ">
          {price}
          {option === "monthly" ? "/mo" : "/yr"}
        </motion.p>
        <AnimatePresence>
          {option === "yearly" && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0, transition: { type: "spring" } },
              }}
              exit={{ opacity: 0, y: 5, transition: { type: "just" } }}
              className="text-marine_blue font-semibold text-sm md:text-base"
            >
              2 months free
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.li>
  );
};

export default ItemCard;
