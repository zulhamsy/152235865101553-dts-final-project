// React
import React from "react";
// Component
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import PasswordField from "../components/PasswordField";
import Link from "@mui/material/Link";
// Icon
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// APIs
import blue from "@mui/material/colors/blue";

export default function Login() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: "90vw",
          minWidth: "18rem",
          maxWidth: "24rem",
        }}
      >
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
          <Link underline="hover" href="/signup">
            Create one
          </Link>
        </Typography>
      </Paper>
      <Typography variant="caption" color="text.secondary">
        Powered by Material UI | Developed by Zulham S
      </Typography>
    </Container>
  );
}
