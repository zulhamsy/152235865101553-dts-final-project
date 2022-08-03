import { createContext, useContext } from "react";

const GameContext = createContext([]);

// Game Hooks
export function useGame() {
  return useContext(GameContext);
}

// Provider
export function GameProvider({ children, value }) {
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
