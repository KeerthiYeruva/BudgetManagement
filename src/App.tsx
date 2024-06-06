import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Login from "./components/Login";
import NotificationComponent from "./components/NotificationComponent";
import Home from "./Pages/Home";
import PrivateRoute from "./Routes/PrivateRoute";
import { useThemeStore } from "./store";
import { ThemeProvider } from "@mui/material/styles";
import { useStore } from "zustand";
import "./App.scss";

function App() {
  const { currentTheme } = useStore(useThemeStore);

  return (
    <ThemeProvider theme={currentTheme}>
      <Container maxWidth="xl">
        <CssBaseline />
        <Box className="App" textAlign="center">
          <NotificationComponent />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<PrivateRoute element={<Home />} />} />
          </Routes>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
