import { useState } from "react";
import { Board } from "./components/Board";

import "./style.css";

export const TicTacToe = () => {
  const [history, setHistory] = useState<Array<Array<string | null>>>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: Array<string | null>) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  return (
    <div className="board-wrapper">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => {
            setHistory([Array(9).fill(null)]);
            setCurrentMove(0);
          }}
        >
          Start Again
        </button>
        {history.map((squares, index) => (
          <p key={index}>{`Move #${index}: ${JSON.stringify(squares)}`}</p>
        ))}
      </div>
    </div>
  );
};
