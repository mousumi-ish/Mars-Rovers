import { Direction } from "./direction";
import { Rover } from "./rover";
import { Action } from "./movement";

const wrapAroundToTop = () => 5;
const wrapAroundToBottom = () => 5;

export const move: Action = (rover: Rover) => {
  switch (rover.facingTowards) {
    case Direction.North:
      return {
        ...rover,
        y: rover.y + 1 > 5 ? wrapAroundToBottom() : rover.y + 1,
      };
    case Direction.East:
      return {
        ...rover,
        x: rover.x + 1 > 5 ? wrapAroundToBottom() : rover.x + 1,
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
