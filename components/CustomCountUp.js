import React from "react";
import CountUp from "react-countup";

const CustomCountUp = ({ children, end }) => {
  return (
    <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        <CountUp start={0} end={end} duration={5} delay={1.5} /> +
      </div>
      <div className="text-xs uppercase tracking-[1px]  max-w-[100px]">
        {children}
      </div>
    </div>
  );
};

export default CustomCountUp;
