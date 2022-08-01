import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4" component="h1" color="grey.800">
        Live Games
      </Typography>
    </Container>
  );
}
