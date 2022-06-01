import { useContext } from "react";
import { Context } from "../AppContext/AppContext";

const Timer = ({ color, fontSize }: { color: string; fontSize?: string }) => {
  const contextData = useContext(Context);
  return (
    <div className=" font-bold text-xl mb-3 mt-1 " style={{ color, fontSize }}>
      {contextData?.state.timer.hours}:{contextData?.state.timer.minutes}:
      {contextData?.state.timer.seconds}
    </div>
  );
};

export default Timer;
