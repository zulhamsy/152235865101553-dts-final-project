import React from "react";
// Component
import SignUpInWrapper from "../components/SignUpInWrapper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import PasswordField from "../components/PasswordField";

export default function Register() {
  return (
    <SignUpInWrapper>
      <Stack spacing={5}>
        <Typography variant="h5" component="h1" fontWeight="medium">
          Create New Account
        </Typography>
        <form>
          <Stack spacing={3}>
            <TextField
              type="email"
              label="Email"
              helperText="For your convenience, we won't share your email"
              autoComplete="off"
              autoFocus
            />
            <PasswordField />
            <Button variant="contained" size="large" sx={{ py: 2 }}>
              Create Account
            </Button>
          </Stack>
        </form>
      </Stack>
      <Typography component="p" variant="caption" mt={2} textAlign="center">
        Already have an account?{" "}
        <Link underline="hover" to="/login" component={RouterLink}>
          Login instead
        </Link>
      </Typography>
    </SignUpInWrapper>
  );
}
