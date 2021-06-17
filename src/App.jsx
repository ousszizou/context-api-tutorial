import React from "react";
import "./App.css";
import CompA from "./components/CompA";
import { Counter } from "./components/Counter";
import CounterContextProvider from "./contexts/CounterContext";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <CounterContextProvider>
        <Counter />
        <CompA />
      </CounterContextProvider>
    </div>
  );
}

export default App;
