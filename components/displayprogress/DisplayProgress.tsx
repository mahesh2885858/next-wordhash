
import Timer from "../timer/Timer";
const DisplayProgress = () => {
  return (
    <div className="lg:w-1/2 w-full lg:py-0  lg:pr-4 mb-6 mt-6 lg:mt-0 lg:mb-0  flex items-center ">
      <div className="lg:rounded-xl sm:rounded-0 lg:mt-[-130px]  relative px-8 lg:py-10 w-full py-4 bg-gradient-to-br from-[#4bcfff] to-[#059ff9]">
        <span className="text-white text-3xl flex justify-center text-center ">
          Next Quiz will be available in
        </span>
        <span className="text-white mt-2 flex justify-center">
          <Timer color="white" fontSize="2rem" />
        </span>
      </div>
    </div>
  );
};

export default DisplayProgress;
