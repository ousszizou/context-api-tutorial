import React from "react";
import { CounterCxt } from "../contexts/CounterContext";
import { NameCxt } from "../contexts/NameContext";

export default () => {
  return (
    <CounterCxt.Consumer>
      {({ counter }) => (
        <NameCxt.Consumer>
          {(name) => {
            return (
              <div>
                <h2>
                  Component B: {counter} - {name}
                </h2>
              </div>
            );
          }}
        </NameCxt.Consumer>
      )}
    </CounterCxt.Consumer>
  );
};
