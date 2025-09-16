import { useEffect, useState } from "react";
import "./style.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const target = [5, 25, 45, 75, 100];
    target.forEach((value, index) => {
      const timeout = setTimeout(() => {
        setProgress((prev) => {
          const copy = [...prev];
          copy[index] = value;
          return copy;
        });
      }, index * 1000);
      return () => clearTimeout(timeout);
    });
  }, []);

  return (
    <div>
      {progress.map((item, index) => (
        <div key={index} className="bar-container">
          <div
            className="bar-progress"
            style={{
              transform: `translateX(-${100 - item}%)`,
            }}
          >
            {item}%
          </div>
        </div>
      ))}
    </div>
  );
};

export { ProgressBar };