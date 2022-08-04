import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ListContainer from "../components/ListContainer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useGame } from "../context/GameContext";

export default function Home() {
  const gameList = useGame();
  const [maxList, setMaxList] = useState(12);
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h4" component="h1" color="grey.600" mb={3}>
        Live Games
      </Typography>
      <ListContainer list={gameList.slice(0, maxList)} />
      <Box textAlign="center" mt={4} mb={6}>
        <Button
          onClick={() => setMaxList(maxList + 12)}
          variant="outlined"
          size="large"
          sx={{ px: 4 }}
        >
          Load More
        </Button>
      </Box>
    </Container>
  );
}
