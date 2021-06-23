import React from "react";
import "./App.css";
import CompA from "./components/CompA";
import { Counter } from "./components/Counter";
import CounterContextProvider from "./contexts/CounterContext";
import NameContextProvider from "./contexts/NameContext";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <CounterContextProvider>
        <Counter />
        <NameContextProvider>
          <CompA />
        </NameContextProvider>
      </CounterContextProvider>
    </div>
  );
}

export default App;
