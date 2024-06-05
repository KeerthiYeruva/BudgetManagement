import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Container,
  Box,
  CssBaseline,
  Grid,
  Typography,
  Alert,
} from "@mui/material";

import { mockLogin } from "../../services/authService";
import { useAuthStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { useStore } from "zustand";

const Signup: React.FC = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    firstName: false,
    lastName: false,
    phoneNumber: false,
  });
  const { login } = useStore(useAuthStore);
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const validateForm = () => {
      const errors = {
        email: formValues.email ? "" : "Email is required",
        password: formValues.password ? "" : "Password is required",
        firstName: formValues.firstName ? "" : "First name is required",
        lastName: formValues.lastName ? "" : "Last name is required",
        phoneNumber: formValues.phoneNumber ? "" : "Phone number is required",
      };

      setFormErrors(errors);
    };

    validateForm();
  }, [formValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionError("");
    try {
      const { token, user } = await mockLogin(formValues);
      login(token, user);
      navigate("/");
      console.log("Signup success");
    } catch (error) {
      setSubmissionError("Signup failed. Please try again.");
      console.error("Signup failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = Object.values(formErrors).every((error) => !error);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {submissionError && (
          <Alert severity="error" sx={{ mt: 2, width: "100%" }}>
            {submissionError}
          </Alert>
        )}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {["firstName", "lastName", "phoneNumber", "email", "password"].map(
              (field, index) => (
                <Grid
                  item
                  xs={12}
                  sm={field === "firstName" || field === "lastName" ? 6 : 12}
                  key={index}
                >
                  <TextField
                    required
                    fullWidth
                    id={field}
                    label={
                      field.charAt(0).toUpperCase() +
                      field.slice(1).replace("Name", " Name")
                    }
                    name={field}
                    type={field === "password" ? "password" : "text"}
                    value={formValues[field]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched[field] && !!formErrors[field]}
                    helperText={touched[field] && formErrors[field]}
                  />
                </Grid>
              )
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Sign up"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
