import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import "./expenses.scss"; // Import predefined styles from a separate file

const Expenses: React.FC = () => {
  const [activeTab, setActiveTab] = useState("add");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <NavLink
            to="/expenses/add-expense"
            className={`nav-link ${activeTab === "add" ? "active" : ""}`}
            onClick={() => handleTabChange("add")}
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                color: activeTab === "add" ? "#fff" : "inherit",
                backgroundColor:
                  activeTab === "add" ? "primary.main" : "transparent",
              }}
            >
              Add Expense
            </Button>
          </NavLink>
          <NavLink
            to="/expenses/manage-expenses"
            className={`nav-link ${activeTab === "manage" ? "active" : ""}`}
            onClick={() => handleTabChange("manage")}
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                color: activeTab === "manage" ? "#fff" : "inherit",
                backgroundColor:
                  activeTab === "manage" ? "primary.main" : "transparent",
              }}
            >
              Manage Expenses
            </Button>
          </NavLink>
          <NavLink
            to="/expenses/add-category"
            className={`nav-link ${activeTab === "addCategory" ? "active" : ""}`}
            onClick={() => handleTabChange("addCategory")}
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                color: activeTab === "addCategory" ? "#fff" : "inherit",
                backgroundColor:
                  activeTab === "addCategory" ? "primary.main" : "transparent",
              }}
            >
              Manage Category
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Box className="tab-content mt-2">
        <Outlet /> {/* This will render the child routes */}
      </Box>
    </Box>
  );
};

export default Expenses;
