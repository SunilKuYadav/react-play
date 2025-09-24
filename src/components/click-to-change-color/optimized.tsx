/*
  Todo: create n by m grid of buttons
  on click of button change the color of button to random color
  also a button to reset the grid color in reverse order of change
*/

import { useState } from "react";

// Constants for grid size
const ROW = 4,
  COL = 4;

// Function to generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ClickToCHangeColor = () => {
  const [colors, setColors] = useState<string[][]>(
    Array.from({ length: ROW }, () =>
      Array.from({ length: COL }, () => "lightgrey")
    )
  );
  const setOrder = useState<string[]>([])[1];

  const handleButtonClick = (row: number, col: number) => {
    console.log("clicked", row, col);
    if (colors[row][col] !== "lightgrey") return;

    setOrder((prevOrder) => [...prevOrder, `${row}-${col}`]);

    setColors((prevColors) => {
      const newColors = prevColors.map((inner) => inner.slice());
      newColors[row][col] = getRandomColor();
      return newColors;
    });
  };

  const handleResetColor = () => {
    console.log("reset clicked");
    const interval = setInterval(() => {
      setOrder((prevOrder) => {
        if (prevOrder.length === 0) {
          clearInterval(interval);
          return prevOrder;
        }

        const grid = prevOrder[prevOrder.length - 1];
        const [row, col] = grid.split("-").map(Number);

        setColors((prevColors) => {
          const newColors = prevColors.map((inner) => inner.slice());
          newColors[row][col] = "lightgrey";
          return newColors;
        });

        return prevOrder.slice(0, -1);
      });
    }, 300);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          border: "1px solid black",
        }}
      >
        {Array.from({ length: ROW }).map((_, idx) => {
          return (
            <div key={`row-${idx}`}>
              {Array.from({ length: COL }).map((_, jdx) => {
                return (
                  <button
                    key={`button-${idx}-${jdx}`}
                    style={{
                      width: "80px",
                      height: "80px",
                      margin: "5px",
                      backgroundColor: colors[idx][jdx],
                      border: "1px solid black",
                      cursor: "pointer",
                    }}
                    onClick={() => handleButtonClick(idx, jdx)}
                  />
                );
              })}
            </div>
          );
        })}
        <button onClick={handleResetColor}>Reset Color</button>
      </div>
    </div>
  );
};

export { ClickToCHangeColor };
