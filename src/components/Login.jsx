import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

export default function Login() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          boxShadow: 2,
          px: 3,
          py: 2,
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: "medium",
            color: "primary.main",
            mb: 0.5,
          }}
        >
          FreeGames
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: "text.secondary",
          }}
        >
          Get your favorite games for free!
        </Typography>
      </Box>
      {/* Login Form */}
      <form>
        <FormControl></FormControl>
      </form>
    </Container>
  );
}
