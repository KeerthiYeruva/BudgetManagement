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
} from "@mui/material";
import {
  Home as HomeIcon,
  Assessment,
  AttachMoney,
  Flag,
  BarChart,
} from "@mui/icons-material";
import MainRoutes from "../../Routes/MainRoutes";
import { useAuthStore } from "../../store";
import "./home.scss";
import { useStore } from "zustand";

const Home: React.FC = () => {
  const { user } = useStore(useAuthStore);

  return (
    <Box display="flex" className="vh-100">
      <Box
        component="aside"
        sx={{
          width: { xs: "100%", md: "25%", lg: "20%" },
          bgcolor: "background.paper",
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={2}
          bgcolor="grey.100"
        >
          <Avatar
            src={"https://picsum.photos/seed/picsum/200/300"}
            alt={`${user?.firstName || "User"}'s avatar`}
            sx={{ width: 56, height: 56 }}
          />
          <Typography variant="h6" component="h3" sx={{ mt: 1 }}>
            {user?.firstName || "User"}
          </Typography>
        </Box>
        <Divider />
        <List component="nav">
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
