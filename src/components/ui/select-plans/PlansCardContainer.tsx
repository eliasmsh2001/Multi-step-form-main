import React from "react";
import { plansData } from "../../../lib/data";
import ItemCard from "./ItemCard";

const PlansCardContainer: React.FC = () => {
  return (
    <ul className=" flex flex-col md:flex-row justify-evenly gap-3 md:gap-5 my-4 md:my-8 w-full">
      {plansData.map((plan) => (
        <ItemCard key={plan.title} plan={plan} />
      ))}
    </ul>
  );
};

export default PlansCardContainer;
