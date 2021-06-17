import React, { useState } from "react";
import "./App.css";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";

function App() {
  const [name, SetName] = useState("Algorithm Academy");
  return (
    <div className="App">
      <h1>Context API</h1>
      <ComponentA name={name} />
      <ComponentB name={name} />
    </div>
  );
}

export default App;
