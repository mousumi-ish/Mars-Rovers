import { Direction } from "./roverDirection";

export interface Rover {
  x: number;
  y: number;
  facingTowards: Direction;
}
