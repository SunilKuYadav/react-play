import "./style.css";
import { useState, memo, useCallback, useRef } from "react";

/*
=> 3 * 3 grid
  -> each grid represent a card
  -> onClicking Card it should revel number by fling the card
  -> btn => on clicking it reset all card state to initial state
  -> make it responsive => mini width and min height => can make it scrollable

=> Optional
  -> Optimize by performance
*/

const getInitialStateValue = (): boolean[] =>
  Array.from({ length: 9 }).fill(false) as boolean[];

const Cell = memo(
  (props: {
    value: number;
    index: number;
    isRevel: boolean;
    handleCellClick: (index: number) => void;
  }) => {
    const { value, index, handleCellClick, isRevel } = props;
    return (
      <button onClick={() => handleCellClick(index)} className="cell">
        <div className={`card ${isRevel ? "show" : "hide"}`}>
          <div className="content">{isRevel ? value : ""}</div>
        </div>
      </button>
    );
  }
);

const FlipCard = () => {
  const [state, setState] = useState<boolean[]>(() => getInitialStateValue());

  const handleCellClick = useCallback((index: number) => {
    if (!state[index]) {
      setState((prev) => {
        const tempState = [...prev];
        tempState[index] = true;
        return tempState;
      });
    }
  }, []);

  const handleResetState = useRef(() => {
    setState(() => getInitialStateValue());
  }).current;

  return (
    <div className="App">
      <div className="container">
        {[0, 3, 6].map((row) => {
          return (
            <div className="col-wrapper" key={row}>
              {[1, 2, 3].map((col) => {
                return (
                  <Cell
                    key={col + row}
                    index={row + col - 1}
                    value={col + row}
                    isRevel={state[col + row - 1]}
                    handleCellClick={handleCellClick}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <button className="reset-btn" onClick={handleResetState}>
        Reset
      </button>
    </div>
  );
}


export { FlipCard };