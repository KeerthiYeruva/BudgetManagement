import React, { useState } from "react";
import { useStore } from "zustand";
import { useUserProfileStore } from "../../store";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { useThemeContext } from "../../styles/context";

const EditProfile: React.FC = () => {
  const { user, updateUserProfile } = useStore(useUserProfileStore);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [income, setIncome] = useState(user?.income || 0);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [incomeError, setIncomeError] = useState("");

  const { themeName, setThemeName } = useThemeContext();
  const availableThemes = ["light", "dark", "custom"];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous error messages
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPhoneNumberError("");
    setIncomeError("");

    // Validate inputs
    let isValid = true;

    if (!firstName) {
      setFirstNameError("First Name is required");
      isValid = false;
    }

    if (!lastName) {
      setLastNameError("Last Name is required");
      isValid = false;
    }

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    if (!phoneNumber) {
      setPhoneNumberError("Phone Number is required");
      isValid = false;
    } else if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError("Invalid phone number format");
      isValid = false;
    }

    if (income <= 0) {
      setIncomeError("Income must be a positive number");
      isValid = false;
    }

    if (isValid) {
      updateUserProfile({ firstName, lastName, email, phoneNumber, income });
    }
  };

  const handleThemeChange = (event: SelectChangeEvent<typeof themeName>) => {
    setThemeName(event.target.value as typeof themeName);
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
        error={!!firstNameError}
        helperText={firstNameError}
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth
        margin="normal"
        error={!!lastNameError}
        helperText={lastNameError}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        error={!!emailError}
        helperText={emailError}
      />
      <TextField
        label="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        fullWidth
        margin="normal"
        error={!!phoneNumberError}
        helperText={phoneNumberError}
      />
      <TextField
        label="Income"
        type="number"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        fullWidth
        margin="normal"
        error={!!incomeError}
        helperText={incomeError}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="theme-select-label">Theme</InputLabel>
        <Select
          labelId="theme-select-label"
          value={themeName}
          onChange={handleThemeChange}
        >
          {availableThemes.map((theme) => (
            <MenuItem key={theme} value={theme}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
};

export default EditProfile;
