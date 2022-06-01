import { useContext } from "react";
import { actionsWords, Context } from "../AppContext/AppContext";

const Button = ({ onEnter }: { onEnter: () => void }) => {
  const contextdata = useContext(Context);
  return (
    <div className="button-container mt-5 lg:gap-3 mx-auto lg:w-[450px] flex justify-center">

      <button
        className="bg-gradient-to-br text-center from-[#059ff9] to-[#4bcfff] mt-6 px-14 lg:ml-6 text-white active:bg-pink-600 font-bold text-xl py-2 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
        onClick={onEnter}
      >
        Go
      </button>
      {contextdata?.state.currentLetter! > 0 &&
        contextdata?.state.gameStatus === "playing" ? (
        <button
          className="bg-gradient-to-br text-center from-[#059ff9] to-[#4bcfff] mt-6 px-14 lg:ml-6 text-white active:bg-pink-600 font-bold text-xl py-2 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
          onClick={() =>
            contextdata?.dispatch({ type: actionsWords.onDelete, data: "" })
          }
        >
          Clear
        </button>
      ) : undefined}
    </div>
  );
};

export default Button;
