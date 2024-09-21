// src/GlobalState.js

import React, { createContext, useContext, useState } from 'react';

// Create the context
export const GlobalStateContext = createContext();

// Hook to use global state
export const useGlobalState = () => useContext(GlobalStateContext);

// Global state provider component
export const GlobalStateProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [counter, setCounter] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [boxes, setBoxes] = useState([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0)); // Ensure counter doesn't go below 0
  };

  const addBox = () => {
    setBoxes((prevBoxes) => [...prevBoxes, prevBoxes.length + 1]);
  };

  const removeBox = () => {
    setBoxes((prevBoxes) => prevBoxes.slice(0, -1));
  };

  return (
    <GlobalStateContext.Provider
      value={{
        theme,
        toggleTheme,
        counter,
        incrementCounter,
        decrementCounter,
        fontSize,
        setFontSize,
        boxes,
        addBox,
        removeBox,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
