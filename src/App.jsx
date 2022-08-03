import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { GameProvider } from "./context/GameContext";
import { fetchLiveGames } from "./service/axios";

const App = () => {
  const [gameList, setGameList] = useState([]);

  // Fetch Data on Initial Mount
  useEffect(function () {
    async function fetchGame() {
      const response = await fetchLiveGames();
      const list = response.data;
      setGameList(list);
    }

    fetchGame();
  }, []);

  return (
    <GameProvider value={gameList}>
      <Header />
      <Outlet />
    </GameProvider>
  );
};

export default App;
