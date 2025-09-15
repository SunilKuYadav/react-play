import React, { useState } from "react";

const PiaChart = () => {
  const [percentage, setPercentage] = useState(10);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(Number(e.target.value));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      PiaChart Component
      <div>
        <input type="range" onChange={handleValueChange} value={percentage} />
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundImage: `conic-gradient(green ${percentage}%, lightgrey 0 100%)`,
          borderRadius: "50%",
          border: "2px solid black",
        }}
      />
    </div>
  );
};

export { PiaChart };
