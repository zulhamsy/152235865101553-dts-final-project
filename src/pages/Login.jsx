// React
import React from "react";
// Component
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import PasswordField from "../components/PasswordField";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import SignUpInWrapper from "../components/SignUpInWrapper";
// Icon
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// APIs
import blue from "@mui/material/colors/blue";

export default function Login() {
  return (
    <SignUpInWrapper>
      <Stack spacing={4}>
        <div>
          <Avatar
            sx={{
              bgcolor: blue[100],
              mb: 2,
              mx: "auto",
              width: 56,
              height: 56,
            }}
          >
            <SportsEsportsTwoToneIcon fontSize="large" />
          </Avatar>
          <Stack direction="row" alignItems="baseline" spacing={0.8}>
            <Typography variant="h5" component="h1" fontWeight="medium">
              Sign In to
            </Typography>
            <Typography
              variant="h5"
              fontWeight="medium"
              color={() => blue[800]}
            >
              GameBlue
            </Typography>
          </Stack>
          <Typography variant="caption" color="text.secondary">
            Get your favorite games for free!
          </Typography>
        </div>
        {/* Login Form */}
        <form>
          <Stack spacing={3}>
            <TextField
              type="email"
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              autoComplete="off"
              autoFocus
            />
            <PasswordField />
            <Button
              variant="contained"
              size="large"
              startIcon={<LockOpenOutlinedIcon />}
              sx={{ py: 2 }}
            >
              Sign In
            </Button>
          </Stack>
        </form>
      </Stack>
      <Typography component="p" variant="caption" mt={2} textAlign="center">
        Don't have an account?{" "}
        <Link underline="hover" to="/signup" component={RouterLink}>
          Create one
        </Link>
      </Typography>
    </SignUpInWrapper>
  );
}
