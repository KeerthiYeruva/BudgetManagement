import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { ThemeProvider, Theme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import lightTheme from "../themes/LightTheme";
import darkTheme from "../themes/DarkTheme";

const AppThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <IconButton onClick={toggleTheme} color="inherit">
        {theme === lightTheme ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </ThemeProvider>
  );
};

export default AppThemeToggle;
