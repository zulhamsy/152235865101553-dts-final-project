import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Chip,
  Stack,
} from "@mui/material";
import data from "../service/mockdata.json";

export default function MultiActionAreaCard() {
  return data.map((game) => {
    return (
      <Card key={game.id} sx={{ maxWidth: "max-content" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={game.thumbnail}
            alt="green iguana"
          />
        </CardActionArea>
        <CardContent>
          <Stack direction="row" gap={1} alignItems="flex-start" mb={2}>
            <Chip clickable label={game.genre} size="small" />
            <Chip clickable label={game.platform} size="small" />
          </Stack>
          <Typography gutterBottom variant="h5" component="div">
            {game.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" maxWidth="40ch">
            {game.short_description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            Add to my Favorite
          </Button>
        </CardActions>
      </Card>
    );
  });
}
