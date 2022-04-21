import { ARROW_KEYS_MAP, COUNTER_DIRECTION, DIRECTION } from "../constants";
import { MapData, Vector } from "../types";

export const getDirection = (_key: string): DIRECTION | null => {
  if (_key in ARROW_KEYS_MAP) {
    const key = _key as keyof typeof ARROW_KEYS_MAP;
    const directionKey = ARROW_KEYS_MAP[key];
    return DIRECTION[directionKey];
  }

  return null;
}

export const getCounterDirection = (direction: DIRECTION): COUNTER_DIRECTION => {
  const directionKey = DIRECTION[direction] as keyof typeof DIRECTION;
  const counterDirection = COUNTER_DIRECTION[directionKey];

  return counterDirection;
}

export const getMapTileState = (mapData: MapData, vector: Vector): DIRECTION => {
  return mapData[vector.y][vector.x].state;
}

export const setMapTileData = (mapData: MapData, vector: Vector, state: DIRECTION): void => {
  mapData[vector.y][vector.x].state = state;
}

export const canMoveFrom = (state: DIRECTION, direction: DIRECTION) => {
  return (state & direction) !== 0;
}

export const canMoveTo = (state: DIRECTION, direction: DIRECTION) => {
  const counterDirection = getCounterDirection(direction);
  return (state & counterDirection) !== 0;
}

export const fromBin = (value: string) => parseInt(value, 2);