import React, { useContext } from "react";
import { Context } from "../AppContext/AppContext";
import "./letters.module.scss";

const Letters: React.FC = () => {
  const contextData = useContext(Context);
  const topArray = contextData?.state.todayTenLetters.filter(
    (letter, index) => index < 5
  );
  const bottomArray = contextData?.state.todayTenLetters.filter(
    (letter, index) => index >= 5
  );
  return (
    <div className="lg:w-1/2 w-full lg:py-6 lg:pr-4 mb-6 lg:mb-0 ">
      <h1 className="text-gray-600 lg:text-2xl sm:text-sm mb-1 text-center  lg:text-center title-font font-medium  lg:mb-4">
        Guess Today`s Word
      </h1>
      <div className="lg:rounded-xl sm:rounded-0 relative px-8 lg:py-10 py-4 bg-gradient-to-br from-[#4bcfff] to-[#059ff9]">
        <div className="circle"></div>
        <div className="circle1"></div>
        <div className="flex relative z-10 justify-center  w-full gap-2">
          {topArray!.map((letter, index) => {
            return (
              <span
                className="text-xl flex justify-center items-center text-center lg:w-12 mb-2 lg:h-12 w-10 h-10 font-medium inline-block lg:py-1 lg:px-2 py-2 px-3 shadow rounded text-neutral-600 bg-white uppercase last:mr-0 mr-1"
                key={index}
              >
                {letter}
              </span>
            );
          })}
        </div>
        <div className="flex relative z-10 justify-center  w-full gap-2">
          {bottomArray!.map((letter, index) => {
            return (
              <span
                className="text-xl flex justify-center items-center text-center lg:w-12 lg:h-12 w-10 h-10 font-medium inline-block lg:py-1 lg:px-2 py-2 px-3 shadow rounded text-neutral-600 bg-white uppercase last:mr-0 mr-1"
                key={index}
              >
                {letter}
              </span>
            );
          })}
        </div>

        <div className="circle3"></div>
        <div className="circle4"></div>
      </div>
    </div>
  );
};

export default Letters;
