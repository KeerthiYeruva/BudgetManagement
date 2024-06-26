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
  Link,
} from "@mui/material";
import { mockLogin } from "../../services/authService"; // Replace with your actual login service
import { useAuthStore } from "../../store";
import { useNavigate, NavLink } from "react-router-dom";
import { useStore } from "zustand";

const Login: React.FC = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
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
    } catch (error) {
      setSubmissionError("Login failed. Please try again.");
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
          Log in
        </Typography>
        {submissionError && (
          <Alert severity="error" sx={{ mt: 2, width: "100%" }}>
            {submissionError}
          </Alert>
        )}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            {["email", "password"].map((field, index) => (
              <Grid item xs={12} sm={12} key={index}>
                <TextField
                  required
                  fullWidth
                  id={field}
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  type={field === "password" ? "password" : "text"}
                  value={formValues[field]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched[field] && !!formErrors[field]}
                  helperText={touched[field] && formErrors[field]}
                />
              </Grid>
            ))}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!isFormValid || isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Log in"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={NavLink} to="/signup" variant="body2">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
