import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from './App.tsx'

let callIndex: number = -1;
const stateValues: Array<unknown> = [];
const cleanupFns: Array<(() => void) | undefined> = [];

const useState = <S,>(
  initialValue: S | (() => S)
): [S, (value: S | ((prev: S) => S)) => void] => {
  callIndex++;

  const currentCallIndex = callIndex;

  if (stateValues[currentCallIndex] === undefined) {
    stateValues[currentCallIndex] =
      typeof initialValue === "function"
        ? (initialValue as () => S)()
        : initialValue;
  }

  const setValue = (value: S) => {
    stateValues[currentCallIndex] =
      typeof value === "function"
        ? (value as (prev: S) => void)(stateValues[currentCallIndex] as S)
        : value;

    // cause re-render
    renderApp();
  };

  return [stateValues[currentCallIndex] as S, setValue];
};

const useEffect = (effect: () => void | (() => void), deps: unknown[]) => {
  callIndex++;
  const currentCallIndex = callIndex;

  const oldDep = stateValues[currentCallIndex] as unknown[] | undefined;
  let hasChanged = true;

  if (deps && oldDep) {
    hasChanged = deps.some((dep, i) => !Object.is(dep, oldDep[i]));
  }

  if (hasChanged) {
    if (cleanupFns[currentCallIndex]) {
      cleanupFns[currentCallIndex]!();
    }

    const cleanUp = effect();
    cleanupFns[currentCallIndex] = cleanUp || undefined;

    stateValues[currentCallIndex] = deps;
  }
};

const useRef = <T,>(initialValue: T): { current: T } => {
  callIndex++;
  const currentCallIndex = callIndex;

  if (stateValues[currentCallIndex] === undefined) {
    stateValues[currentCallIndex] = { current: initialValue };
  }

  return stateValues[currentCallIndex] as { current: T };
};

const useMemo = <T, >(factory: () => T, deps: any[])  : T => {
  callIndex++;
  const currentCallIndex = callIndex;
  
}

const App = () => {
  const [countA, setCountA] = useState(() => 1);
  const [countB, setCountB] = useState(-1);
  const renderCountRef = useRef(0);

  renderCountRef.current += 1;

  useEffect(() => {
    console.log(countA, countB);
    return () => console.log("Count", renderCountRef.current);
  }, [countA, countB]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <p>Count A: {countA}</p>
        <button onClick={() => setCountA(countA - 1)}>-</button>
        <button onClick={() => setCountA(countA + 1)}>+</button>
      </div>
      <div>
        <p>Count B: {countB}</p>
        <button onClick={() => setCountB((p) => p - 1)}>-</button>
        <button onClick={() => setCountB((p) => p + 1)}>+</button>
      </div>
    </div>
  );
};

export const renderApp = () => {
  callIndex = -1;
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};
