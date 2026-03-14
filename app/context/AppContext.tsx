import React, { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: any) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};