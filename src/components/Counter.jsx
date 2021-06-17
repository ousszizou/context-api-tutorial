import React from "react";
import { CounterCxt } from "../contexts/CounterContext";

export const Counter = () => {
  return (
    <CounterCxt.Consumer>
      {({ counter, increaseCounter, decreaseCounter }) => {
        return (
          <div>
            <h3>Counter value is {counter}</h3>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
          </div>
        );
      }}
    </CounterCxt.Consumer>
  );
};
