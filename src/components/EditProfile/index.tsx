import React, { useState } from "react";
import { useStore } from "zustand";
import { useUserProfileStore, useThemeStore } from "../../store";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import ToggleColorMode from "../../styles/components/ToggleColorMode";
import { ToggleCustomTheme } from "../../styles/components/ToggleCustomTheme";

const EditProfile: React.FC = () => {
  const { user, updateUserProfile } = useStore(useUserProfileStore);
  const { showCustomTheme, toggleCustomTheme, mode, toggleColorMode } =
    useStore(useThemeStore);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [income, setIncome] = useState(user?.income || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({ firstName, lastName, email, phoneNumber, income });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={3}>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>
      <TextField
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Income"
        type="number"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
      <Box mt={2}>
        <ToggleCustomTheme
          showCustomTheme={showCustomTheme}
          toggleCustomTheme={toggleCustomTheme}
        />
        <Grid mt={2}>
          <Button>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default EditProfile;
