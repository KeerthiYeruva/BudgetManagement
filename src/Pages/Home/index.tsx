import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  IconButton,
} from "@mui/material";
import {
  Home as HomeIcon,
  Assessment,
  AttachMoney,
  Flag,
  BarChart,
  Edit as EditIcon,
} from "@mui/icons-material";
import MainRoutes from "../../Routes/MainRoutes";
import { useAuthStore } from "../../store";
import { useStore } from "zustand";

import "./home.scss";

const Home: React.FC = () => {
  const { user } = useStore(useAuthStore);

  return (
    <Box display="flex" height="100vh">
      <Box
        component="aside"
        sx={{
          width: { xs: "100%", md: "25%", lg: "20%" },
          bgcolor: "background.paper",
          borderRight: 1,
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 2,
        }}
      >
        <Avatar
          src={"https://picsum.photos/seed/picsum/200/300"}
          alt={`${user?.firstName || "User"}'s avatar`}
          sx={{ width: 80, height: 80, mb: 2 }}
        />
        <Typography
          variant="h6"
          component="h3"
          sx={{ display: "flex", alignItems: "center" }}
        >
          {user?.firstName || "User"}
          <IconButton
            component={NavLink}
            to="/edit-profile"
            sx={{ ml: 1, p: 0 }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        </Typography>

        <Divider sx={{ width: "100%", mt: 2 }} />
        <List component="nav" sx={{ width: "100%", mt: 2 }}>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/" end>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/expenses">
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary="Expenses" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/reports">
              <ListItemIcon>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/goals">
              <ListItemIcon>
                <Flag />
              </ListItemIcon>
              <ListItemText primary="Goals" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/budget">
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="Budget" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <MainRoutes />
      </Box>
    </Box>
  );
};

export default Home;
