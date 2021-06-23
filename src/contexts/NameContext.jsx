import React, { createContext, useState } from "react";

export const NameCxt = createContext();
NameCxt.displayName = "Name";

const NameContextProvider = (props) => {
  const [name, setName] = useState("Algorithm Academy");

  return <NameCxt.Provider value={name}>{props.children}</NameCxt.Provider>;
};

export default NameContextProvider;
