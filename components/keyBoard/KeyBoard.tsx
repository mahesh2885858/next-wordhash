import { useCallback, useContext, useEffect } from "react";
import { actionsWords, Context } from "../AppContext/AppContext";

import Button from "../Buuton/Button";
import CheckingTheWord from "../utils/checkingTheWord";
import { useRouter } from "next/router";
import styles from "./KeyBoard.module.scss";
const KeyBoard: React.FC = () => {
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];
  const navigate = useRouter();
  const contextdata = useContext(Context);
  const onEnter = () => {
    if (
      contextdata?.state.gameStatus === "completed" ||
      contextdata?.state.gameStatus === "over"
    ) {
      navigate.push("/result");
    }
    if (contextdata?.state.currentLetter !== 5) return;
    contextdata?.dispatch({ type: actionsWords.checkTheWord, data: "" });
    const wordResult = CheckingTheWord(
      contextdata?.state.board!,
      contextdata?.state.currentAttempt!,
      contextdata?.state.correctWord!
    );
    console.log("enter");
    if (
      wordResult.isCorrect ||
      (contextdata.state.currentAttempt === 5 && contextdata.state.isAValidWord)
    ) {
      navigate.push("/result");
    }
  };
  const handleKeyboard = useCallback(
    (event: any) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        contextdata?.dispatch({ type: actionsWords.onDelete, data: "" });
      } else {
        keys.map((row) => {
          return row.forEach((letter) => {
            if (letter === event.key) {
              return contextdata?.dispatch({
                type: actionsWords.onKeyPress,
                data: letter,
              });
            }
          });
        });
      }
    },
    [keys] // eslint-disable-line react-hooks/exhaustive-deps
  ); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className={styles.keyboardButtonContainer}>
      <div className={styles.keyboardContainer}>
        {keys.map((keyrow) => {
          return (
            <div key={Math.random()} className={styles.keyboardRow}>
              {keyrow.map((keyletter) => {
                return (
                  <button
                    key={Math.random()}
                    className={styles.keyboardLetter}
                    onClick={() => {
                      contextdata?.dispatch({
                        type: actionsWords.onKeyPress,
                        data: keyletter,
                      });
                    }}
                  >
                    {keyletter}
                  </button>
                );
              })}
            </div>
          );
        })}

      </div>

      <Button onEnter={onEnter} />
    </div>
  );
};

export default KeyBoard;
