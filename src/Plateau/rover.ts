import { Direction } from "./direction";

export interface Rover {
  x: number;
  y: number;
  facingTowards: Direction;
}
