import { boardLayout } from "../utils/Reducer/AppContext";

const CheckingTheWord = (
  board: boardLayout[],
  currentAttempt: number,
  correctWord: string
) => {
  let countOfMatchedLetters = 0; //to check whether all letteres matched or not
  //   Getting the new Board by checking letters of the word
  const newBoard = board.map((row, index) => {
    if (index === currentAttempt) {
      const newRow = { ...row };
      const newLetter = row.letters.map((letter, index) => {
        // if (correctWord.indexOf(letter.value) === index) {
        if (letter.value === correctWord[index]) {
          countOfMatchedLetters += 1;
          return { ...letter, status: "correct" };
        } else {
          return { ...letter, status: "wrong" };
        }
      });
      return { ...newRow, letters: newLetter };
    } else {
      return row;
    }
  });
  if (countOfMatchedLetters === correctWord.length) {
    let testWord = "";
    board[currentAttempt].letters.forEach((letter) => {
      testWord = testWord.concat(letter.value);
    });

    if (testWord.toLowerCase() === correctWord.toLowerCase()) {
      return { newBoard, isCorrect: true, word: testWord };
    } else {
      return { newBoard, isCorrect: false, word: testWord };
    }
  } else {
    return { newBoard, isCorrect: false };
  }
};
export default CheckingTheWord;
