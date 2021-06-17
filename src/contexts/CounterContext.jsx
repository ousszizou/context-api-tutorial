import React, { createContext, useState } from "react";

export const CounterCxt = createContext(0);
CounterCxt.displayName = "Counter";

const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  const value = { counter, increaseCounter, decreaseCounter };

  return (
    <CounterCxt.Provider value={value}>{props.children}</CounterCxt.Provider>
  );
};

export default CounterContextProvider;
