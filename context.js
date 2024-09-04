// ReportContext.js
import React, { createContext, useState } from 'react';

// Create a ThemeContext with default value
export const ReportContext = createContext();

// Create a ThemeProvider component
export const ReportProvider = ({ children }) => {
  const [report,setReport] = useState(null); // Default theme

  return (
    <ReportContext.Provider value={{report,setReport }}>
      {children}
    </ReportContext.Provider>
  );
};
