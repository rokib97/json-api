import React, { createContext, useState } from "react";
export const AppContext = createContext(null);
const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <AppContext.Provider value={{ cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
