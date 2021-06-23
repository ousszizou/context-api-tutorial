import React, { useContext } from "react";
import { CounterCxt } from "../contexts/CounterContext";

export const Counter = () => {
  const { counter, increaseCounter, decreaseCounter } = useContext(CounterCxt);
  return (
    <div>
      <h3>Counter value is {counter}</h3>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
};
