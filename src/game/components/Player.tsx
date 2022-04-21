import { motion } from "framer-motion"
import { TILE_SIZE } from '../constants';
import { PlayerData } from '../types';

interface PlayerProps {
  player: PlayerData;
}

export const Player = (props: PlayerProps) => {
  const { player } = props;

  return (
    <motion.div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        scale: 2,
        // left: player.x * TILE_SIZE,
        // top: player.y * TILE_SIZE,
        // transform: 'scale(2)',
      }}
      transition={{
        duration: 0.15,
      }}
      animate={{
        x: player.x * TILE_SIZE,
        y: player.y * TILE_SIZE,
      }}
      initial={{
        x: player.x * TILE_SIZE,
        y: player.y * TILE_SIZE,
      }}
    >
      {'🦆'}
    </motion.div>
  );
};