import { DEBUG_MODE, DIRECTION, EGG, TILE_SIZE } from '../constants';
import { TileData } from '../types';
import { canMoveFrom } from '../utils';

interface TileProps {
  tile: TileData;
}

export const Tile = (props: TileProps) => {
  const {
    tile: {
      state,
      x,
      y,
    }
  } = props;

  const isEmpty = state === 0;
  // const isEgg = (EGG & state) === EGG;
  // const isEgg = !!(EGG & state);
  // const isEgg = (EGG & state) !== 0;
  const isEgg = ((state >> 4) & 1) !== 0;

  return (
    <div style={{
      left: x * TILE_SIZE,
      top: y * TILE_SIZE,
      width: TILE_SIZE,
      height: TILE_SIZE,

      position: 'absolute',
      border: '3px transparent solid',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'grey',

      borderTopColor: canMoveFrom(state, DIRECTION.UP) ? 'transparent' : 'white',
      borderRightColor: canMoveFrom(state, DIRECTION.RIGHT) ? 'transparent' : 'white',
      borderBottomColor: canMoveFrom(state, DIRECTION.DOWN) ? 'transparent' : 'white',
      borderLeftColor: canMoveFrom(state, DIRECTION.LEFT) ? 'transparent' : 'white',
    }}>
      
      {isEmpty && (
        <div style={{
          transform: 'scale(3)',
        }}>🟦</div>
      )}
      {isEgg && (
        <div>🥚</div>
      )}
      {DEBUG_MODE ? state : null}
    </div>
  );
};