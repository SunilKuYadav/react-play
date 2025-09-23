type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

export const Square = ({ value, onSquareClick }: SquareProps) => (
  <button className="board-cell" onClick={onSquareClick}>
    {value}
  </button>
);
