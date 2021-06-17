import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import CounterContextProvider from "./contexts/CounterContext";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    </div>
  );
}

export default App;
