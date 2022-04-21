import { DirectionKey, PlayerData } from "./types";

export const TILE_SIZE = 50;
export const COLUMNS_COUNT = 10;
export const ROWS_COUNT = 20;
// export const DEBUG_MODE = true;
export const DEBUG_MODE = false;

export const INITIAL_PLAYER: PlayerData = {
  x: 1,
  y: 1,
};

export enum DIRECTION {
  UP = 1 << 0,
  RIGHT = 1 << 1,
  DOWN = 1 << 2,
  LEFT = 1 << 3,
}

export enum COUNTER_DIRECTION {
  UP = DIRECTION.UP << 2,
  RIGHT = DIRECTION.RIGHT << 2,
  DOWN = DIRECTION.DOWN >> 2,
  LEFT = DIRECTION.LEFT >> 2,
};

export const ARROW_KEYS_MAP: Record<string, DirectionKey> = {
  ArrowUp: 'UP',
  ArrowRight: 'RIGHT',
  ArrowDown: 'DOWN',
  ArrowLeft: 'LEFT',

  w: 'UP',
  d: 'RIGHT',
  x: 'DOWN',
  a: 'LEFT',
};

export const EGG = 1 << 4;