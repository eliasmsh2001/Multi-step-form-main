import React from "react";

const Header: React.FC<{ title: string; text: string }> = (props) => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-marine_blue my-2 md:my-3">
        {props.title}
      </h1>
      <p className="text-cool_gray font-semibold text-sm md:text-base">
        {props.text}
      </p>
    </div>
  );
};

export default Header;
