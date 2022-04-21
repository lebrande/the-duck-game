import { DIRECTION } from "./constants";

export type Vector = {
  y: number;
  x: number;
};

export interface TileData extends Vector {
  key: number;
  state: number;
}

export interface PlayerData extends Vector {}

export type MapData = TileData[][];

export type DirectionKey = keyof typeof DIRECTION;

export type World = [Vector, DIRECTION][];

export type Matrix = string[][];