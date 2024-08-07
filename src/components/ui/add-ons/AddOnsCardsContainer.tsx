import React from "react";
import { addOnsData } from "../../../lib/data";
import AddOnItem from "./AddOnItem";
import { motion } from "framer-motion";

const AddOnsCardsContainer: React.FC = () => {
  return (
    <motion.ul
      layout
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      exit={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
      className="flex flex-col gap-5 mt-6"
    >
      {addOnsData.map((item) => (
        <AddOnItem key={item.title} addOn={item} />
      ))}
    </motion.ul>
  );
};

export default AddOnsCardsContainer;
