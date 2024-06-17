import { createStore } from "zustand";
import { createTheme } from "@mui/material/styles";
import { PaletteMode, Theme } from "@mui/material";
import getLPTheme from "../styles/themes/Theme";

interface ThemeState {
  showCustomTheme: boolean;
  mode: PaletteMode;
  toggleColorMode: () => void;
  toggleCustomTheme: () => void;
  currentTheme: Theme;
}

const getDefaultTheme = (mode: PaletteMode, showCustomTheme: boolean) => {
  return showCustomTheme
    ? createTheme(getLPTheme(mode))
    : createTheme({ palette: { mode } });
};

export const useThemeStore = createStore<ThemeState>((set) => ({
  showCustomTheme: true,
  mode: "light",
  currentTheme: getDefaultTheme("light", true),
  toggleColorMode: () =>
    set((state) => {
      const newMode = state.mode === "dark" ? "light" : "dark";
      return {
        mode: newMode,
        currentTheme: getDefaultTheme(newMode, state.showCustomTheme),
      };
    }),
  toggleCustomTheme: () =>
    set((state) => ({
      showCustomTheme: !state.showCustomTheme,
      currentTheme: getDefaultTheme(state.mode, !state.showCustomTheme),
    })),
}));
