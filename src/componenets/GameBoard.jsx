import { useState } from "react";

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
const [gameBoard, setGameBoard] = useState(initalGameBoard);

// 배열 복사하기 https://academind.com/tutorials/reference-vs-primitive-values -> 참고하기
function handleSelectSquare(rowIndex, colIndex) {
  setGameBoard((prevGameBoard) => {
    const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    return updateBoard;
  });

  onSelectSquare();
}

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
