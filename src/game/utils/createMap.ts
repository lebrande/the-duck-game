import { COLUMNS_COUNT, DIRECTION, ROWS_COUNT } from "../constants";
import { setMapTileData } from ".";
import { MapData, Vector, World } from "../types";

const BOUND_SIDES_TOP: Vector[] = Array(ROWS_COUNT).fill('').map((_, x) => {
  return {
    x,
    y: 0,
  };
});

const BOUND_SIDES_BOTTOM: Vector[] = Array(ROWS_COUNT).fill('').map((_, x) => {
  return {
    x,
    y: COLUMNS_COUNT - 1,
  };
});

const BOUND_SIDES_LEFT: Vector[] = Array(COLUMNS_COUNT).fill('').map((_, y) => {
  return {
    x: 0,
    y,
  };
});

const BOUND_SIDES_RIGHT: Vector[] = Array(COLUMNS_COUNT).fill('').map((_, y) => {
  return {
    x: ROWS_COUNT - 1,
    y,
  };
});

export const createMap = (world: World): MapData => {
  const MAP: MapData = Array(COLUMNS_COUNT).fill('').map((_column, y) => {
    return Array(ROWS_COUNT).fill('').map((_row, x) => {
      return {
        key: (y * ROWS_COUNT) + x,
        state: DIRECTION.UP | DIRECTION.RIGHT | DIRECTION.DOWN | DIRECTION.LEFT,
        x,
        y,
      };
    });
  });

  [
    ...BOUND_SIDES_TOP,
    ...BOUND_SIDES_BOTTOM,
    ...BOUND_SIDES_LEFT,
    ...BOUND_SIDES_RIGHT,
  ].forEach((position) => {
    setMapTileData(MAP, position, 0);
  });

  world.forEach(([position, state]) => {
    const absolutePosition: Vector = { 
      x: position.x + 1,
      y: position.y + 1,
    }
    setMapTileData(MAP, absolutePosition, state);
  });

  return MAP;
}