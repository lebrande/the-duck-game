import { useEffect, useState } from "react";
import { INITIAL_PLAYER } from "../constants";
import { move } from "../utils/move";
import { canMoveFrom, canMoveTo, getDirection, getMapTileState } from "../utils";
import { PlayerData } from "../types";

import { MAP_1 } from "../maps/MAP_1";
const MAP = MAP_1;

// import { MAP_2 } from "../maps/MAP_2";
// const MAP = MAP_2;

export const useGame = () => {
  const [player, setPlayer] = useState<PlayerData>(INITIAL_PLAYER);

  const handleKeyboardControl = (event: KeyboardEvent) => setPlayer((prevPlayer) => {
    const direction = getDirection(event.key);

    if (!direction) {
      return prevPlayer;
    }

    const from = getMapTileState(MAP, prevPlayer);

    if (!canMoveFrom(from, direction)) {
      return prevPlayer;
    }

    const nextPlayer = move(prevPlayer, direction);
    const to = getMapTileState(MAP, nextPlayer);

    if (!canMoveTo(to, direction)) {
      return prevPlayer;
    }

    return nextPlayer;
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardControl, false);
    
    return () => {
      document.removeEventListener("keydown", handleKeyboardControl, false);
    }
  }, []);

  return {
    map: MAP,
    player,
  };
}