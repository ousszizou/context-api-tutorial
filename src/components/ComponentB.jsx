import React, { useState } from "react";
import { ComponentC } from "./ComponentC";

export const ComponentB = ({ name }) => {
  return (
    <div>
      <h1>Component B</h1>
      <ComponentC name={name} />
    </div>
  );
};
