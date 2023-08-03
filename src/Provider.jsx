import React, { createContext, useState } from "react";

const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [errorMessages, setErrorMessages] = useState([]);

  return (
    <ErrorContext.Provider
      value={{
        errorMessages,
        setErrorMessages,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider };
