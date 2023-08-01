import { Direction } from "./roverDirection";

// Declaring rover type with it's position as x and y co-ordinates along with the
// direction it's facing.

export type Rover = {
  x: number;
  y: number;
  facingTowards: Direction;
};
