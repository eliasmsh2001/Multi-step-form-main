import React from "react";
import checkImg from "../../assets/images/icon-thank-you.svg";
import { motion } from "framer-motion";

const Completion: React.FC = () => {
  return (
    <motion.main
      variants={{
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "flex", transition: { delay: 0.7 } },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: "spring", duration: 0.6 }}
      className="w-full h-full flex flex-col p-10 justify-center items-center"
    >
      <div className="md:w-1/2 flex  flex-col justify-center items-center gap-5">
        <img src={checkImg} alt="Thank you" className="size-24" />
        <h1 className="text-xl md:text-4xl font-bold text-marine_blue">
          Thank you!
        </h1>
        <p className="font-semibold text-cool_gray md:text-lg text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </motion.main>
  );
};

export default Completion;
