import { createMap } from "../utils/createMap";
import { World } from "../types";
import { createWorldFromMatrix } from "../utils/createWorldFromMatrix";

const MATRIX = [
  ['01011', '01011', '01111', '01011', '01011', '01011', '01011', '01011', ],
  ['01111', '01111', '00101', '01111', '01111', '01111', '01111', '01111', ],
  ['01111', '00111', '10101', '01111', '01111', '00000', '01111', '01111', ],
  ['01111', '00111', '00101', '01111', '01111', '00000', '00000', '01111', ],
  ['01111', '00111', '00101', '01111', '01111', '11111', '01111', '01111', ],
  ['01111', '01110', '01111', '01111', '01111', '01111', '01111', '01111', ],
];

const WORLD: World = createWorldFromMatrix(MATRIX); 

export const MAP_2 = createMap(WORLD);
