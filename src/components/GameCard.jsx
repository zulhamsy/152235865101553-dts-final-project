import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function GameCard({ gameData }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: "max-content" }}>
      <CardActionArea onClick={() => navigate(`/detail/${gameData.id}`)}>
        <CardMedia
          component="img"
          image={gameData.thumbnail}
          alt="green iguana"
        />
      </CardActionArea>
      <CardContent>
        <Stack direction="row" gap={1} alignItems="flex-start" mb={2}>
          <Chip clickable label={gameData.genre} size="small" />
          <Chip clickable label={gameData.platform} size="small" />
        </Stack>
        <Typography gutterBottom variant="h5" component="div" maxWidth="20ch">
          {gameData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" maxWidth="40ch">
          {gameData.short_description}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" color="primary">
          Add to my Favorite
        </Button>
      </CardActions>
    </Card>
  );
}
