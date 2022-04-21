import { ReactNode } from "react";
import { COLUMNS_COUNT, ROWS_COUNT, TILE_SIZE } from "../constants";

interface MapProps {
  children: ReactNode;
}

export const Map = (props: MapProps) => {
  const { children } = props;

  return (
    <div style={{
      height: TILE_SIZE * COLUMNS_COUNT,
      width: TILE_SIZE * ROWS_COUNT,
      position: 'relative',
      margin: '0 auto',
    }}>
      {children}
    </div>
  );
};