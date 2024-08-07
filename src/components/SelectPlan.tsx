import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./ui/Header";
import PlansCardContainer from "./ui/select-plans/PlansCardContainer";
import BillingOptions from "./ui/select-plans/BillingOptions";
import NavigatingActions from "./ui/NavigatingActions";
import { useSelector } from "react-redux";
import { PlanState } from "../types/types";
import { motion } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";

const SelectPlan: React.FC = () => {
  const [errorNotification, setErrorNotification] = useState(false);
  const navigate = useNavigate();
  const plan = useSelector((state: PlanState) => state.plans.item);

  const onNextStep = () => {
    if (plan.planTitle) {
      navigate("?mode=add-ons");
    } else {
      setErrorNotification(true);
    }
  };
  function onGoBack() {
    navigate("..");
  }

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
      className=" md:h-full w-full md:w-3/4 lg:ml-10 md:p-10"
    >
      {errorNotification && (
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ type: "spring", duration: 0.5 }}
          className="md:absolute w-96 md:right-6 m-auto mt-2 md:m-0"
        >
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>Please select a plan!</AlertDescription>
          </Alert>
        </motion.div>
      )}
      <div className=" flex flex-col justify-between h-full md:w-[63vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] p-5 md:p-10 lg:ml-7 relative">
        <div className="w-full">
          <Header
            title="Select your plan"
            text="You have the option of monthly or yearly billing."
          />
          <PlansCardContainer />
          <BillingOptions />
        </div>
        <NavigatingActions
          onGoBack={onGoBack}
          onNext={onNextStep}
          nextTitle="Next Step"
          backTitle="Go Back"
        />
      </div>
    </motion.main>
  );
};

export default SelectPlan;
