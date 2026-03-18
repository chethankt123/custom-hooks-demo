import React from "react";
import useCounter from "./useCounter";

function CounterB() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <div>
      <h2>Counter B: {count}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default CounterB;