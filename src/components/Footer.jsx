import { Container, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ textAlign: "center", py: 3, boxShadow: 3 }}
    >
      <Typography variant="overline" component="p" color="text.secondary">
        Made by Zulham S
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Powered by React X Material UI
      </Typography>
    </Container>
  );
}
