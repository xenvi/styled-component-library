import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: '#e35d25',
    primaryLight: '#e66d3b',
    text: '#0F1F30',
    secondaryText: '#848484',
    background: '#0D2030',
    secondaryBackground: '#175892',
    lightBackground: '#00639F',
    inputBackground: '#EEEEF0',
    cardBackground: 'rgba(230,230,232,0.3)',
    success: '#4caf50',
    border: 'rgba(151,151,151,0.38)',
    buttonGrey: '#8E8E93',
  },
  fonts: ["Rajdhani", "Arial", "Helvetica", "sans-serif"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const OnWaterTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default OnWaterTheme;