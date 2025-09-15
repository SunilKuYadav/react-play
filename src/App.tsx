import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  AutoCompleteSearch,
  ClickToCHangeColor,
  Pagination,
  PiaChart,
  StateUpdateInBatch,
  TabForm,
} from "./components";

import PACKAGE from "../package.json";

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
];

function App() {
  return (
    <>
      <div>
        <input type="text" />
        <button>Search</button>

        <input type="text" placeholder="Count" />

        <button>Render random</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          border: "1px solid red",
        }}
      >
        {FEATURE.slice(FEATURE.length - 1).map((_, i) => {
          const feature = FEATURE[FEATURE.length - 1 - i];
          const Component = feature.component;
          return (
            <div key={feature.name} style={{ marginBottom: "3rem" }}>
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
