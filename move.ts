import { Direction } from "./roverDirection";
import { Rover } from "./rover";
import { Action } from "./roverAction";

const wrapAroundToTop = () => 10;
const wrapAroundToBottom = () => 0;

export const move: Action = (rover: Rover) => {
  switch (rover.facingTowards) {
    case Direction.North:
      return {
        ...rover,
        y: rover.y + 1 > 10 ? wrapAroundToBottom() : rover.y + 1,
      };
    case Direction.East:
      return {
        ...rover,
        x: rover.x + 1 > 10 ? wrapAroundToBottom() : rover.x + 1,
      };
    case Direction.South:
      return {
        ...rover,
        y: rover.y - 1 < 0 ? wrapAroundToTop() : rover.y - 1,
      };
    case Direction.West:
      return {
        ...rover,
        x: rover.x - 1 < 0 ? wrapAroundToTop() : rover.x - 1,
      };
  }
};
