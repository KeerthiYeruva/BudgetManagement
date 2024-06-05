import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Reports: React.FC = () => {
  const location = useLocation();

  const getActiveTab = () => {
    switch (location.pathname) {
      case "/reports/chart":
        return 0;
      case "/reports/table":
        return 1;
      case "/reports/generateReport":
        return 2;
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
          label="Chart"
          component={NavLink}
          to="/reports/chart"
          className="nav-link"
          value={0}
        />
        <Tab
          label="Table"
          component={NavLink}
          to="/reports/table"
          className="nav-link"
          value={1}
        />
        <Tab
          label="Generator"
          component={NavLink}
          to="/reports/generateReport"
          className="nav-link"
          value={2}
        />
      </Tabs>
      <Box className="main-content container-fluid mt-4">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Reports;
