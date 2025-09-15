import { useEffect, useState } from "react";

const StateUpdateInBatch = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    console.log("Updating count");
    setCount(count + 1);
    setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    updateCount();
  }, []);

  return <div>StateUpdateInBatch {count}</div>;
};

export { StateUpdateInBatch };
