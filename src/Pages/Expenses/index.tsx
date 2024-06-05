import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import "./expenses.scss"; // Import predefined styles from a separate file

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const Expenses: React.FC = () => {
  const location = useLocation();
  const [value, setValue] = useState(() => {
    switch (location.pathname) {
      case "/expenses/manage-expenses":
        return 1;
      case "/expenses/add-category":
        return 2;
      default:
        return 0;
    }
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleTabChange}
            aria-label="expenses tabs"
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab
              label="Add Expense"
              component={NavLink}
              to="/expenses/add-expense"
            />
            <Tab
              label="Manage Expenses"
              component={NavLink}
              to="/expenses/manage-expenses"
            />
            <Tab
              label="Manage Category"
              component={NavLink}
              to="/expenses/add-category"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box className="tab-content mt-2">
        <TabPanel value={value} index={0}>
          <Outlet />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Outlet />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Outlet />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Expenses;
