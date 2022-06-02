

import { useContext, } from "react";
import CheckingTheWord from "../utils/checkingTheWord";
import Button from "../Buuton/Button";
import { Context } from "../AppContext/AppContext";
import { actionsWords } from "../AppContext/AppContext";

import styles from "./board.module.scss";
import { useRouter } from "next/router";

const Board: React.FC = () => {
    const data = useContext(Context);
    const navigate = useRouter()
    const onEnter = () => {
        if (
            data?.state.gameStatus === "completed" ||
            data?.state.gameStatus === "over"
        ) {
            navigate.push("/result");
        }
        if (data?.state.currentLetter !== 5) return;
        data?.dispatch({ type: actionsWords.checkTheWord, data: "" });
        const wordResult = CheckingTheWord(
            data?.state.board!,
            data?.state.currentAttempt!,
            data?.state.correctWord!
        );
        console.log("enter");
        if (
            wordResult.isCorrect ||
            (data.state.currentAttempt === 5 && data.state.isAValidWord)
        ) {
            navigate.push("/result");
        }
    };

    return (
        <div className="lg:w-1/2 flex flex-col justify-center items-center  gap-2 lg:gap-4 w-full lg:pr-0 lg:pb-6 mb-6 lg:mb-0">
            {data?.state.board.map((attempt, attmeptIndex) => {
                return (
                    <div
                        className="flex gap-1 mb-1 lg:gap-4  justify-center sm:items-center w-full"
                        key={attempt.rowId}
                    >
                        {attempt.letters.map((letter, letterIndex) => {
                            return (
                                <span
                                    key={letter.id}
                                    className="w-[50px] h-[50px] lg:w-14  lg:h-14 placeholder-slate-300 text-slate-600 relative bg-[#caf1ff] rounded quiz-font border-0 shadow outline-none focus:outline-none focus:ring flex justify-center items-center uppercase font-bold blinkingCursor"
                                    id={letter.status === "blink" ? styles.blink : (
                                        letter.status === "" ? undefined : (
                                            letter.status === "correct" ? styles.correct : styles.wrong
                                        )
                                    )}
                                >
                                    {letter.value}
                                </span>
                            );
                        })}
                    </div>
                );
            })}
            <div className={styles.boardButtonContainer}>

                <Button onEnter={onEnter} />
            </div>
        </div>
    );
};

export default Board;
