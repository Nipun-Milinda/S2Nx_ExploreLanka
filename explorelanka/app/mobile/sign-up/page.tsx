import React from "react";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import Link from "next/link";

const SignIn: React.FC = () => {
  return (
    <Container maxWidth="xs" className="mt-10">
      <Box className="flex flex-col items-center">
        {/* Apply Montserrat font for titles */}
        <Typography
          component="h1"
          variant="h5"
          className="mb-6 font-montserrat font-bold"
        >
          Sign Up
        </Typography>
        <form className="w-full">
          {/* Apply Poppins font for input labels */}
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
          {/* Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="mt-3 bg-blue-500 hover:bg-blue-700 font-poppins font-bold"
          >
            Sign Up
          </Button>
          <Link href="./sign-in">
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              className="mt-3 font-poppins font-bold"
            >
              Back
            </Button>
          </Link>
        </form>
        {/* Links */}
        <Box className="mt-4"></Box>
      </Box>
    </Container>
  );
};

export default SignIn;
