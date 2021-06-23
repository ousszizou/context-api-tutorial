import React, { useContext } from "react";
import { CounterCxt } from "../contexts/CounterContext";
import { NameCxt } from "../contexts/NameContext";

export default () => {
  const name = useContext(NameCxt);
  const { counter } = useContext(CounterCxt);
  return (
    <div>
      <h2>
        Component B: {counter} - {name}
      </h2>
    </div>
  );
};
