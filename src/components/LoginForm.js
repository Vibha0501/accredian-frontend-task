import React, { useState } from "react";
import { Card,CardContent,TextField, Button } from "@mui/material";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Card>
      <CardContent>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
        </form>
      </CardContent>
      </Card>
  );
};

export default LoginForm;
