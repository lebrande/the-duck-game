import { DIRECTION } from "../constants";
import { PlayerData, Vector } from "../types";

const getVector = (direction: DIRECTION): Vector => {
  switch (direction) {
    case DIRECTION.UP: return { x: 0, y: -1 };
    case DIRECTION.RIGHT: return { x: 1, y: 0 };
    case DIRECTION.DOWN: return { x: 0, y: 1 };
    case DIRECTION.LEFT: return { x: -1, y: 0 };
    default: throw new Error(`Cannot find vector for direction: ${direction}`);
  }
}

export const move = (
  player: PlayerData,
  direction: DIRECTION,
): PlayerData => {
  const vector = getVector(direction);

  return {
    ...player,
    x: player.x + vector.x,
    y: player.y + vector.y,
  }
}