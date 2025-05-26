import React, { createContext, useContext, useState } from "react";

// Use PascalCase for context and components
const PortfolioContext = createContext();

// Properly define the provider component
export const PortfolioProvider = ({ children }) => {
  const [projectDetails, setProjectDetails] = useState();

  return (
    <PortfolioContext.Provider value={{ projectDetails, setProjectDetails }}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook for consuming context
export const useData = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("useData must be used within a PortfolioProvider");
  }
  return context;
};
