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

  // let content;
  // if (searchParams.get("mode") === "select-plan") {
  //   content = <SelectPlan />;
  // } else if (searchParams.get("mode") === "add-ons") {
  //   content = <AddOns />;
  // } else if (searchParams.get("mode") === "summary") {
  //   content = <Summary />;
  // } else if (searchParams.get("mode") === "completion") {
  //   content = <Completion />;
  // } else {
  //   content = <YourInfo />;
  // }
  return (
    <AnimatePresence>
      <motion.div className=" md:h-[96vh] z-10 mt-32 md:mt-4 bg-white w-[90vw] flex mx-auto rounded-xl shadow-xl">
        {/* <AnimatePresence>{content}</AnimatePresence> */}
        <AnimatePresence>
          {!searchParams.get("mode") && <YourInfo />}
        </AnimatePresence>
        <AnimatePresence>
          {searchParams.get("mode") === "select-plan" && <SelectPlan />}
        </AnimatePresence>
        <AnimatePresence>
          {searchParams.get("mode") === "add-ons" && <AddOns />}
        </AnimatePresence>
        <AnimatePresence>
          {searchParams.get("mode") === "summary" && <Summary />}
        </AnimatePresence>
        <AnimatePresence>
          {searchParams.get("mode") === "completion" && <Completion />}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageContent;
