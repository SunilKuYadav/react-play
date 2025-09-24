import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  AutoCompleteSearch,
  ClickToCHangeColor,
  Elevator,
  FlipCard,
  FolderStructure,
  Loader,
  Pagination,
  PiaChart,
  ProgressBar,
  StateUpdateInBatch,
  TabForm,
  TicTacToe,
  ValidParenthesis,
} from "./components";

import PACKAGE from "../package.json";
import { useState } from "react";

const FEATURE = [
  {
    name: "Click To Change Color",
    desc: "",
    component: ClickToCHangeColor,
  },
  {
    name: "Pia Chart",
    desc: "",
    component: PiaChart,
  },
  {
    name: "State Update In Batch",
    desc: "",
    component: StateUpdateInBatch,
  },
  {
    name: "Tab Form",
    desc: "",
    component: TabForm,
  },
  {
    name: "Pagination",
    desc: "",
    component: Pagination,
  },
  {
    name: "Auto Complete Search",
    desc: "",
    component: AutoCompleteSearch,
  },
  {
    name: "Folder Structure",
    desc: "",
    component: FolderStructure,
  },
  {
    name: "Valid Parenthesis",
    desc: "",
    component: ValidParenthesis,
  },
  {
    name: "Progress bar",
    dec: "",
    component: ProgressBar,
  },
  {
    name: "Loader",
    dec: "",
    component: Loader,
  },
  {
    name: "Tic Tac Toe",
    desc: "",
    component: TicTacToe,
  },
  {
    name: "Elevator",
    des: "",
    component: Elevator,
  },
  {
    name: "Flip Card",
    des: "",
    component: FlipCard,
  },
];

function App() {
  const [currentComponents, setCurrentComponents] = useState(
    FEATURE.length - 1
  );
  const [renderAll, setRenderAll] = useState(false);

  const handlePrevClick = () => {setCurrentComponents(prev => (prev - 1) / (FEATURE.length - 1))}
  const handleNextClick = () => {setCurrentComponents(prev => (prev + 1) / (FEATURE.length - 1))}



  return (
    <>
      <div>
        <button onClick={() => setRenderAll((p) => !p)}>
          {renderAll ? "Render One" : "Render All"}
        </button>
        {!renderAll && (
          <>
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
          </>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          border: "1px solid red",
        }}
      >
        {(renderAll ? FEATURE : [FEATURE[currentComponents]]).map((_, i) => {
          const feature = FEATURE[FEATURE.length - 1 - i];
          const Component = feature.component;
          return (
            <div
              key={feature.name}
              style={{
                marginBottom: "3rem",
                borderBottom: "0.5rem solid pink",
              }}
            >
              <h2>{feature.name}</h2>
              <Component />
            </div>
          );
        })}
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
      {JSON.stringify(PACKAGE.dependencies, null, 2)}
    </>
  );
}

export default App;
