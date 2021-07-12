import { ThemeProvider as Provider } from "styled-components";
import { useSelector } from "react-redux";
import React from "react";
import { themes } from "./themes";

const ThemeProvider = ({ children }) => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const theme = themes[currentTheme];

  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
