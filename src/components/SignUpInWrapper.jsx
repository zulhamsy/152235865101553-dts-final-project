import React from "react";
// Component
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function SignUpInWrapper({ children }) {
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
        {children}
      </Paper>
      <Typography variant="caption" color="text.secondary">
        Powered by Material UI | Developed by Zulham S
      </Typography>
    </Container>
  );
}
