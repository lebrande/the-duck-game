import { COLUMNS_COUNT, DIRECTION, ROWS_COUNT } from "../constants";
import { MapData, Vector } from "../types";
import { setMapTileData } from "../utils";

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

const World: [Vector, DIRECTION][] = [
  [
    {
      x: 7,
      y: 4,
    },
    DIRECTION.UP,
  ],
  [
    {
      x: 12,
      y: 7,
    },
    DIRECTION.RIGHT | DIRECTION.LEFT,
  ],
];

export const generateMapData = (): MapData => {
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

  World.forEach(([position, state]) => {
    setMapTileData(MAP, position, state);
  });

  return MAP;
}
