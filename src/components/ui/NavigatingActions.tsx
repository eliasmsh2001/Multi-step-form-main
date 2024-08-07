import React from "react";
import { Button } from "./button";
import clsx from "clsx";

const NavigatingActions: React.FC<{
  onNext: () => void;
  onGoBack: () => void;
  nextTitle: string;
  backTitle: string;
}> = (props) => {
  return (
    <div className="flex w-full justify-between fixed bottom-0 left-0 md:relative p-2 md:p-0 bg-white md:bg-transparent">
      <Button
        type="submit"
        onClick={props.onGoBack}
        className=" text-cool_gray w-28 h-12 self-end hover:text-marine_blue font-semibold text-lg"
      >
        {props.backTitle}
      </Button>
      <Button
        onClick={props.onNext}
        type="submit"
        className={clsx(
          "bg-marine_blue hover:bg-pastel_blue w-28 h-12 self-end  text-magnolia",
          {
            "bg-purplish_blue hover:bg-pastel_blue":
              props.nextTitle === "Confirm",
          }
        )}
      >
        {props.nextTitle === "Confirm" ? "Confirm" : props.nextTitle}
      </Button>
    </div>
  );
};

export default NavigatingActions;
