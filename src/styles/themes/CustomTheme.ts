// theme.ts

import { createTheme } from "@mui/material/styles";

// Define custom theme
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue primary color
    },
    secondary: {
      main: "#dc004e", // Pink secondary color
    },
    background: {
      default: "#f0f2f5", // Default background color
    },
    text: {
      primary: "#333333", // Primary text color
      secondary: "#757575", // Secondary text color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Default font family
  },
});

export default customTheme;
