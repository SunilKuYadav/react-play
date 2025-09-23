import { Square } from "./Square";
import { calculateWinner } from "./utils";

type BoardProps = {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (nextSquares: Array<string | null>) => void;
};

export const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const handleClick = (cell: number) => {
    if (squares[cell] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[cell] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="board-container">
      {[0, 3, 6].map((rowStart) => (
        <div key={rowStart} className="board-row">
          {[0, 1, 2].map((offset) => {
            const index = rowStart + offset;
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      ))}
      <div className="status">{status}</div>
    </div>
  );
};
