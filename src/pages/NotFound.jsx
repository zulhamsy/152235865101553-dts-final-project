import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        textTransform="uppercase"
        fontWeight="bold"
        gutterBottom
      >
        Oops! page not found
      </Typography>
      <Typography variant="h5" mb={5} color="GrayText">
        We couldn't find what you're looking for
      </Typography>
      <Button onClick={() => navigate("/")} variant="contained" size="large">
        Go to Home
      </Button>
    </Container>
  );
}
