import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import PACKAGE from "../package.json";
import { useState } from "react";
import { FEATURE } from "./components";

function App() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(4);
  const [showProblemStatement, setShowProblemStatement] = useState(() =>
    Array.from({ length: FEATURE.length }).fill(false)
  );
  const [showProblemChallenges, setShowProblemChallenges] = useState(() =>
    Array.from({ length: FEATURE.length }).fill(false)
  );
  const [renderAll, setRenderAll] = useState(false);

  const handlePrevClick = () =>
    setCurrentComponentIndex(
      (prev) => (prev - 1 + FEATURE.length) % FEATURE.length
    );

  const handleNextClick = () =>
    setCurrentComponentIndex((prev) => (prev + 1) % FEATURE.length);

  const handleRandomClick = () =>
    setCurrentComponentIndex(() => Math.floor(Math.random() * FEATURE.length));

  const handleShowProblemStatement = (index: number) =>
    setShowProblemStatement((prev) => {
      const tempState = [...prev];
      tempState[index] = !tempState[index];
      return tempState;
    });

  const handleShowProblemChallenges = (index: number) =>
    setShowProblemChallenges((prev) => {
      const tempState = [...prev];
      tempState[index] = !tempState[index];
      return tempState;
    });

  return (
    <>
      <div className="header-container">
        <button onClick={() => setRenderAll((p) => !p)}>
          {renderAll ? "Render One" : "Render All"}
        </button>
        {!renderAll && (
          <>
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
            <button onClick={handleRandomClick}>Random</button>
          </>
        )}
      </div>
      <div className="components-container">
        {(renderAll ? FEATURE : [FEATURE[currentComponentIndex]]).map(
          (feature, index) => {
            const Component = feature.component;
            return (
              <div key={feature.name} className="component-container">
                <h2 className="component-name">{feature.name}</h2>
                <Component />
                <br />
                <br />
                <button onClick={() => handleShowProblemStatement(index)}>
                  {showProblemStatement[index]
                    ? "Hide Problem Statement"
                    : "Show Problem Statement"}
                </button>
                {showProblemStatement[index] && Boolean(feature?.desc) ? (
                  <div>
                    <p className="question-statement">{feature.desc}</p>

                    <button onClick={() => handleShowProblemChallenges(index)}>
                      {showProblemChallenges[index]
                        ? "Hide Challenges"
                        : "Show Challenges"}
                    </button>

                    {feature.challenges?.map((challenge, index) => (
                      <p className="question-challenges" key={index}>
                        {index + 1}. {challenge}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          }
        )}
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>React Play</h2>
      {JSON.stringify(PACKAGE.dependencies, null, 2)}
    </>
  );
}

export default App;
