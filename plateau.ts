import { Direction } from "./roverDirection";
import { Rover } from "./rover";
const Top = () => 5;
const Bottom = () => 5;

export const movement = (rover: Rover) => {
  switch (rover.facingTowards) {
    case Direction.North:
      return {
        rover,
        y: rover.y + 1 > 5 ? Bottom() : rover.y + 1,
      };
    case Direction.East:
      return {
        rover,
        x: rover.x + 1 > 5 ? Bottom() : rover.x + 1,
      };
    case Direction.South:
      return {
        rover,
        y: rover.y - 1 < 0 ? Top() : rover.y - 1,
      };
    case Direction.West:
      return {
        rover,
        x: rover.x - 1 < 0 ? Top() : rover.x - 1,
      };
  }
  throw new Error();
};
