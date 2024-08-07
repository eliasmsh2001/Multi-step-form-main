import Step from "./Step";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { StepType } from "../types/types";
import { motion } from "framer-motion";

const ProgressSteps: React.FC = () => {
  const [searchParams] = useSearchParams();

  const steps: StepType[] = [
    {
      id: 1,
      title: "STEP 1",
      description: "YOUR INFO",
      isActive: !searchParams.get("mode") ? true : false,
    },
    {
      id: 2,
      title: "STEP 2",
      description: "SELECT PLAN",
      isActive: searchParams.get("mode") === "select-plan" ? true : false,
    },
    {
      id: 3,
      title: "STEP 3",
      description: "ADD-ONS",
      isActive: searchParams.get("mode") === "add-ons" ? true : false,
    },
    {
      id: 4,
      title: "STEP 4",
      description: "SUMMARY",
      isActive:
        searchParams.get("mode") === "summary" ||
        searchParams.get("mode") === "completion"
          ? true
          : false,
    },
  ];

  return (
    <motion.main
      variants={{
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      }}
      initial="hidden"
      animate="visible"
      exit={{ x: -100, opacity: 0 }}
      transition={{
        type: "spring",
        duration: 1,
        delay: 0.4,
      }}
      className=" w-screen md:w-96 h-52 md:h-screen md:p-4 absolute md:relative flex justify-center items-start md:block"
    >
      <motion.ul
        variants={{
          hidden: { x: -30, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 1.2,
            },
          },
        }}
        transition={{ type: "spring" }}
        className={`h-full w-full flex justify-center items-start gap-5 md:gap-0 md:block md:bg-desktopBg bg-mobileBg bg-no-repeat bg-cover md:rounded-xl p-12`}
      >
        {steps.map((step) => (
          <Step key={step.id} step={step} />
        ))}
      </motion.ul>
    </motion.main>
  );
};

export default ProgressSteps;
