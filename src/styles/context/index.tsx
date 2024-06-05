import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useEffect,
} from "react";
import { ThemeProvider, Theme } from "@mui/material/styles";
import lightTheme from "../themes/LightTheme";
import darkTheme from "../themes/DarkTheme";
import customTheme from "../themes/CustomTheme";

// Define the type for all themes
type AvailableThemes = "light" | "dark" | "custom";

// Map the theme names to the actual theme objects
const themeMap: Record<AvailableThemes, Theme> = {
  light: lightTheme,
  dark: darkTheme,
  custom: customTheme,
};

interface ThemeContextType {
  toggleTheme: () => void;
  setThemeName: (themeName: AvailableThemes) => void;
  theme: Theme;
  themeName: AvailableThemes;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<AvailableThemes>("light");

  // Update the theme whenever themeName changes
  const theme = useMemo(() => themeMap[themeName], [themeName]);

  const toggleTheme = () => {
    setThemeName((prevThemeName) => {
      const themeNames = Object.keys(themeMap) as AvailableThemes[];
      const currentThemeIndex = themeNames.indexOf(prevThemeName);
      const nextThemeIndex = (currentThemeIndex + 1) % themeNames.length;
      return themeNames[nextThemeIndex];
    });
  };

  // Optionally persist the theme in localStorage
  useEffect(() => {
    const savedThemeName = localStorage.getItem("theme") as AvailableThemes;
    if (savedThemeName && themeMap[savedThemeName]) {
      setThemeName(savedThemeName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  const value = useMemo(
    () => ({
      toggleTheme,
      setThemeName,
      theme,
      themeName,
    }),
    [theme, themeName]
  );

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
