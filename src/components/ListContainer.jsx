import React from "react";
import GameCard from "./GameCard";

export default function ListContainer({ list = [] }) {
  return (
    <div>
      {list.map((data) => {
        return <GameCard key={data.id} gameData={data} />;
      })}
    </div>
  );
}
