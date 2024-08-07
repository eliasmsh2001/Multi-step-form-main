import React from "react";
import Header from "./ui/Header";
import NavigatingActions from "./ui/NavigatingActions";
import { useNavigate } from "react-router-dom";
import PlanCart from "./ui/summary/PlanCart";
import { useSelector } from "react-redux";
import { AddOnState, PlanState } from "../types/types";
import TotalPrice from "./ui/summary/TotalPrice";
import { motion } from "framer-motion";

const Summary: React.FC = () => {
  const navigate = useNavigate();
  const plan = useSelector((state: PlanState) => state.plans.item);
  const billingOption = useSelector((state: PlanState) => state.plans.option);
  const addOns = useSelector((state: AddOnState) => state.addOns.item);

  const onNextStep: () => void = () => {
    navigate("?mode=completion");
  };
  const onGoBack: () => void = () => {
    navigate("?mode=add-ons");
  };

  return (
    <motion.main
      variants={{
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "block", transition: { delay: 0.7 } },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: "spring", duration: 0.6 }}
      className="  w-full md:w-3/4 lg:ml-10 md:p-10"
    >
      <div className="  flex flex-col justify-between h-full md:w-[63vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] p-10 lg:ml-7 ">
        <div className="w-full">
          <Header
            title="Finishing up"
            text="Double-check everything looks OK before confirming."
          />
          {plan.planTitle ? (
            <>
              <PlanCart
                planData={plan}
                addOnsData={addOns}
                option={billingOption}
              />
              <TotalPrice
                planData={plan}
                addOnsData={addOns}
                option={billingOption}
              />
            </>
          ) : (
            <p className="text-lg text-cool_gray my-8">
              Something went wrong!. Please go back and make sure you have
              picked a plan.
            </p>
          )}
        </div>
        <NavigatingActions
          nextTitle="Confirm"
          onNext={onNextStep}
          backTitle="Go Back"
          onGoBack={onGoBack}
        />
      </div>
    </motion.main>
  );
};

export default Summary;
