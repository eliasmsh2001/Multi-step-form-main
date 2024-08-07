import React from "react";
import YourInfo from "../components/YourInfo";
import { useSearchParams } from "react-router-dom";
import SelectPlan from "../components/SelectPlan";
import AddOns from "../components/AddOns";
import Summary from "../components/Summary";
import Completion from "../components/Completion";
import { AnimatePresence, motion } from "framer-motion";

const PageContent: React.FC = () => {
  const [searchParams] = useSearchParams();

  return (
    <AnimatePresence>
      <motion.div className=" md:h-[96vh] z-10 mt-32 md:mt-4 bg-white w-[90vw] flex mx-auto rounded-xl shadow-xl">
        <AnimatePresence mode="wait">
          {!searchParams.get("mode") && <YourInfo />}
          {searchParams.get("mode") === "select-plan" && <SelectPlan />}
          {searchParams.get("mode") === "add-ons" && <AddOns />}
          {searchParams.get("mode") === "summary" && <Summary />}
          {searchParams.get("mode") === "completion" && <Completion />}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageContent;
