import React, { useState } from "react";
import { useStore } from "zustand";
import { useUserProfileStore, useThemeStore } from "../../store";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  SelectChangeEvent,
  Avatar,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Paper,
} from "@mui/material";
import ToggleColorMode from "../../styles/components/ToggleColorMode";
import { ToggleCustomTheme } from "../../styles/components/ToggleCustomTheme";
import { PhotoCamera } from "@mui/icons-material";

const EditProfile: React.FC = () => {
  const { user, updateUserProfile } = useStore(useUserProfileStore);
  const { showCustomTheme, toggleCustomTheme, mode, toggleColorMode } =
    useStore(useThemeStore);

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    income: user?.income || 0,
    incomePeriod: user?.incomePeriod || "monthly",
    profilePicture: user?.profilePicture || "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    income: "",
  });

  const [profilePictureFile, setProfilePictureFile] = useState<File | null>(
    null
  );

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setProfilePictureFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setFormData((prev) => ({
            ...prev,
            profilePicture: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleIncomePeriodChange = (
    event: SelectChangeEvent<"weekly" | "monthly" | "yearly">
  ) => {
    setFormData((prev) => ({
      ...prev,
      incomePeriod: event.target.value as "weekly" | "monthly" | "yearly",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      income: "",
    };

    let isValid = true;

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format";
      isValid = false;
    }

    if (formData.income <= 0) {
      newErrors.income = "Income must be a positive number";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      if (profilePictureFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === "string") {
            updateUserProfile({ ...formData, profilePicture: reader.result });
          }
        };
        reader.readAsDataURL(profilePictureFile);
      } else {
        updateUserProfile(formData);
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      p={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          marginBottom: 3,
          width: "100%",
          maxWidth: 600,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <ToggleCustomTheme
            showCustomTheme={showCustomTheme}
            toggleCustomTheme={toggleCustomTheme}
          />
          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        </Box>
      </Paper>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
        <Avatar
          src={formData.profilePicture || ""}
          alt="Profile Picture"
          sx={{ width: 120, height: 120 }}
        />
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="profile-picture-upload"
          type="file"
          onChange={handleProfilePictureChange}
        />
        <label htmlFor="profile-picture-upload">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Income"
            type="number"
            name="income"
            value={formData.income}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            error={!!errors.income}
            helperText={errors.income}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Select
                    value={formData.incomePeriod}
                    onChange={handleIncomePeriodChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Income Period" }}
                    sx={{ marginLeft: 1 }}
                    size="small"
                  >
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                    <MenuItem value="yearly">Yearly</MenuItem>
                  </Select>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Save
      </Button>
    </Box>
  );
};

export default EditProfile;
