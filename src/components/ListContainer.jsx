import { Stack } from "@mui/material";
import React from "react";
import GameCard from "./GameCard";

export default function ListContainer({ list = [] }) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="flex-start"
      rowGap={2}
    >
      {list.map((data) => {
        return <GameCard key={data.id} gameData={data} />;
      })}
    </Stack>
  );
}
