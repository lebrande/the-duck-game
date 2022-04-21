import { DIRECTION } from "../constants";
import { createMap } from "../utils/createMap";
import { World } from "../types";

const WORLD: World= [
  [
    {
      x: 7,
      y: 3,
    },
    DIRECTION.UP,
  ],
  [
    {
      x: 12,
      y: 6,
    },
    DIRECTION.RIGHT | DIRECTION.LEFT,
  ],
  // [
  //   {
  //     x: -1,
  //     y: 6,
  //   },
  //   15,
  // ],
];

export const MAP_1 = createMap(WORLD);
