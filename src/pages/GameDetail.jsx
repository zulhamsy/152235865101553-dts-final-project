import {
  Container,
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameWithId } from "../service/axios";

export default function GameDetail() {
  const [gameData, setGameData] = useState({});
  const { gameId } = useParams();

  useEffect(
    function () {
      async function fetchGame() {
        const response = await fetchGameWithId(gameId);
        const data = response.data;
        setGameData(data);
      }

      fetchGame();
    },
    [gameId],
  );

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container>
        {/* Image */}
        <Grid item sm={4}>
          <img src={gameData.thumbnail} alt={gameData.title} />
          <List>
            <ListItem>
              <ListItemText
                primary="Developer"
                secondary={gameData.developer}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Publisher"
                secondary={gameData.publisher}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Release Date"
                secondary={gameData.release_date}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Platform" secondary={gameData.platform} />
            </ListItem>
          </List>
        </Grid>
        {/* Content */}
        <Grid item sm={8}>
          <Stack spacing={4}>
            {/* Description */}
            <div>
              <Typography
                variant="h5"
                component="h2"
                fontWeight={500}
                color="darkblue"
                mb={2}
              >
                About {gameData.title}
              </Typography>
              <Typography variant="body1" whiteSpace="pre-line">
                {gameData.description}
              </Typography>
            </div>
            {/* Minimum Specs */}
            {gameData.minimum_system_requirements && (
              <div>
                <Typography
                  variant="h5"
                  component="h2"
                  fontWeight={500}
                  color="darkblue"
                >
                  Minimum System Requirement
                </Typography>
                <Grid container>
                  <Grid item sm={5}>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Operating System"
                          secondary={gameData.minimum_system_requirements.os}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Memory"
                          secondary={
                            gameData.minimum_system_requirements.memory
                          }
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item sm={5}>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Processor"
                          secondary={
                            gameData.minimum_system_requirements.processor
                          }
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Graphics"
                          secondary={
                            gameData.minimum_system_requirements.graphics
                          }
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </div>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
