import React from "react";
import { YourInfoFrom } from "./YourInfoForm";
import Header from "./ui/Header";
import { motion } from "framer-motion";

const YourInfo: React.FC = () => {
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
      className=" md:h-screen w-full md:w-3/4 lg:ml-10 md:p-10"
    >
      <div className=" flex flex-col justify-between md:w-[63vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] p-6 md:p-10 lg:ml-7 ">
        <Header
          title="Personal info"
          text="Please provide your name, email adress, and phone number."
        />
        <div className="md:my-10 w-full">
          <YourInfoFrom />
        </div>
      </div>
    </motion.main>
  );
};

export default YourInfo;