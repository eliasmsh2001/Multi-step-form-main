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
        hidden: { opacity: 0, display: "none" },
        visible: { opacity: 1, display: "block", transition: { delay: 0.7 } },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ type: "spring", duration: 0.6 }}
      className=" md:h-full w-full md:w-3/4 lg:ml-10 md:p-10"
    >
      <div className="  flex flex-col justify-between h-full md:w-[63vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] p-10 lg:ml-7 ">
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
      </div>
    </motion.main>
  );
};

export default AddOns;
