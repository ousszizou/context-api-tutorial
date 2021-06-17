import React, { createContext, useState } from "react";

const counterCxt = createContext(0);

const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  const value = { counter, increaseCounter, decreaseCounter };

  return (
    <counterCxt.Provider value={value}>{props.children}</counterCxt.Provider>
  );
};

export default CounterContextProvider;
