import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  CssBaseline,
 
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://accredian-backend-task-0suu.onrender.com/login",
        formData
      );
      console.log("Login response:", response.data);
      setErrorMessage("");
      navigate("/home");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
      console.error("Error:", error);
    }
    console.log("Form submitted:", formData);
  };
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            {errorMessage && (
              <Typography color="error" variant="body1" sx={{ mb: 2 }}>
                {errorMessage}
              </Typography>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
