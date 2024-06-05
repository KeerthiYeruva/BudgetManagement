import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./goals.scss"; // Import predefined styles from a separate file

const Goals = () => {
  const location = useLocation();

  const getActiveTab = () => {
    switch (location.pathname) {
      case "/goals/set":
        return 0;
      case "/goals/view":
        return 1;
      default:
        return 0;
    }
  };

  const [activeTab, setActiveTab] = React.useState(getActiveTab());

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box className="container mt-4">
      <Tabs value={activeTab} onChange={handleChange} centered>
        <Tab
          label="Set Goals"
          component={NavLink}
          to="/goals/set"
          className="nav-link"
          value={0}
        />
        <Tab
          label="Manage Goals"
          component={NavLink}
          to="/goals/view"
          className="nav-link"
          value={1}
        />
      </Tabs>
      <Box className="main-content container-fluid mt-4">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Goals;
