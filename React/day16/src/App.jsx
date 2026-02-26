import React, { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {

    }  // heavy loop
    return num * 2;
  };

  const result = useMemo(() => { return expensiveCalculation(number) }, [number]);

  return (
    <>
      <h2>Result: {result}</h2>
      <h2>number: {number}</h2>
      <h2>count:{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>
    </>
  );
}

export default App;