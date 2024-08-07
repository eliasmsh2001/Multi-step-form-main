import React from "react";
import Header from "./ui/Header";
import AddOnsCardsContainer from "./ui/add-ons/AddOnsCardsContainer";
import NavigatingActions from "./ui/NavigatingActions";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AddOns: React.FC = () => {
  const navigate = useNavigate();

  const onGoNext = () => {
    navigate("?mode=summary");
  };
  const onGoBack = () => {
    navigate("?mode=select-plan");
  };
  return (
    <motion.main
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
        },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.7 }}
      exit={{ opacity: 0 }}
      className=" md:h-full w-full md:w-3/4 lg:ml-10 md:p-3"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        exit={{ opacity: 1 }}
        className="  flex flex-col justify-between h-full md:w-[63vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] p-4 md:p-10 lg:ml-7 "
      >
        <div>
          <Header
            title="Pick add-ons"
            text="Add-ons help enhance your gaming experience"
          />
          <AddOnsCardsContainer />
        </div>
        <NavigatingActions
          onNext={onGoNext}
          onGoBack={onGoBack}
          nextTitle="Next Step"
          backTitle="Go Back"
        />
      </motion.div>
    </motion.main>
  );
};

export default AddOns;
