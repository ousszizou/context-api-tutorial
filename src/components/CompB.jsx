import React from "react";
import { CounterCxt } from "../contexts/CounterContext";

export default () => {
  return (
    <CounterCxt.Consumer>
      {({ counter }) => {
        return (
          <div>
            <h2>Component B: {counter}</h2>
          </div>
        );
      }}
    </CounterCxt.Consumer>
  );
};
