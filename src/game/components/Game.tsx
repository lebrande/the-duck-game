import { Player } from './Player';
import { Map } from './Map';
import { Tile } from './Tile';
import { useGame } from '../hooks/useGame';

export const Game = () => {
  const { map, player } = useGame()

  return (
    <Map>
      {map.map((row) => {
        return row.map((tile) => {
          return (
            <Tile key={tile.key} tile={tile} />
          )
        });
      })}
      <Player player={player} />
    </Map>
  );
};

