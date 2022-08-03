import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ListContainer from "../components/ListContainer";
import { useGame } from "../context/GameContext";

export default function Home() {
  const gameList = useGame();
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4" component="h1" color="grey.600" mb={3}>
        Live Games
      </Typography>
      <ListContainer list={gameList.slice(0, 10)} />
    </Container>
  );
}
