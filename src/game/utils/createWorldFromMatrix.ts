import { fromBin } from ".";
import { DIRECTION } from "../constants";
import { Matrix, Vector, World } from "../types";

export const createWorldFromMatrix = (matrix: Matrix): World => {
  return matrix.flatMap((row, y) => {
    return row.map((cell, x) => {
      return [{ x, y }, fromBin(cell)] as [Vector, DIRECTION];
    });
  });
}