import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [fontFamily, setFontFamily] = useState(() => {
    return localStorage.getItem("fontFamily") || "sans-serif";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("fontFamily", fontFamily);
    document.body.style.fontFamily = fontFamily;
  }, [fontFamily]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const changeFont = (font) => setFontFamily(font);

  const theme = {
    ...(isDarkMode ? darkTheme : lightTheme),
    fontFamily,
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, fontFamily, changeFont }}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};