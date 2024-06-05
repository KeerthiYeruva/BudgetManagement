import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./budget.scss"; // Import predefined styles from a separate file

const Budget: React.FC = () => {
  const location = useLocation();

  const getActiveTab = () => {
    switch (location.pathname) {
      case "/budget/set-budget":
        return 0;
      case "/budget/manage-budgets":
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
          label="Set Budget"
          component={NavLink}
          to="/budget/set-budget"
          className="nav-link"
          value={0}
        />
        <Tab
          label="Manage"
          component={NavLink}
          to="/budget/manage-budgets"
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

export default Budget;
