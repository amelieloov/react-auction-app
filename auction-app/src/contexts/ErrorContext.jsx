import { createContext, useContext, useState } from "react";

export const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState("");

  const showError = (message, duration = 4000) => {
    setError(message);

    setTimeout(() => {
      setError("");
    }, duration);
  };

  const clearError = () => setError("");

  return (
    <ErrorContext.Provider value={{ error, showError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;