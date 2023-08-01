import { Rover } from "./rover";
export enum Direction {
  North = "N",
  East = "E",
  South = "S",
  West = "W",
}
export const rightMovement = (direction: Direction) => {
  const rightmove = new Map<Direction, Direction>([
    [Direction.North, Direction.East],
    [Direction.East, Direction.South],
    [Direction.South, Direction.West],
    [Direction.West, Direction.North],
  ]);

  return rightmove.get(direction) as Direction;
};
export const leftMovement = (direction: Direction) => {
  const leftmove = new Map<Direction, Direction>([
    [Direction.North, Direction.West],
    [Direction.West, Direction.South],
    [Direction.South, Direction.East],
    [Direction.East, Direction.North],
  ]);

  return leftmove.get(direction);
};
