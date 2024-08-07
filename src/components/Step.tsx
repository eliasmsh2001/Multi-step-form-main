import React from "react";
import clsx from "clsx";
import { StepType } from "../types/types";
import { motion } from "framer-motion";

const Step: React.FC<{ step: StepType }> = (props) => {
  return (
    <motion.li
      variants={{
        hidden: { x: -30, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring" } },
      }}
      exit={{ x: 0, opacity: 1 }}
      className="flex items-center md:w-full md:my-9 gap-6"
    >
      <span
        className={clsx(
          "size-10 flex items-center justify-center  text-xl font-semibold rounded-full transition-all duration-500 ",
          {
            "bg-transparent border-2 border-magnolia text-magnolia":
              props.step.isActive === false,
            "text-marine_blue bg-light_blue": props.step.isActive === true,
          }
        )}
      >
        {props.step.id}
      </span>
      <div className="md:block hidden">
        <h3 className="text-cool_gray font-semibold">{props.step.title}</h3>
        <h1 className="text-alabaster font-bold tracking-wider">
          {props.step.description}
        </h1>
      </div>
    </motion.li>
  );
};

export default Step;
