import React from "react";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google"; // MUI Google icon
import FacebookIcon from "@mui/icons-material/Facebook"; // MUI Facebook icon

const SignIn: React.FC = () => {
  return (
    <Container maxWidth="xs" className="mt-10">
      <Box className="flex flex-col items-center">
        {/* Main title */}
        <Typography
          component="h1"
          variant="h5"
          className="mb-6 font-montserrat font-bold"
        >
          Sign In
        </Typography>

        <form className="w-full">
          {/* Email and Password Fields */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            className="mb-4 font-poppins"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className="mb-4 font-poppins"
          />

          <Typography variant="body2" className="font-poppins">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="mt-3 bg-blue-500 hover:bg-blue-700 font-poppins font-bold"
          >
            Sign In
          </Button>
        </form>

        {/* Google Sign In Button */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          className="mt-3 font-poppins"
          style={{ borderColor: "#db4437", color: "#db4437" }} // Google colors
        >
          Sign in with Google
        </Button>

        {/* Facebook Sign In Button */}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<FacebookIcon />}
          className="mt-3 font-poppins"
          style={{ borderColor: "#3b5998", color: "#3b5998" }} // Facebook colors
        >
          Sign in with Facebook
        </Button>

        {/* Forgot Password & Sign Up Links */}
        <Box className="mt-4">
          <Typography variant="body2" className="font-poppins">
            {"Don't have an account? "}
            <a href="./sign-up" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
