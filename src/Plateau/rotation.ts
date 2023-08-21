import { getLeftOf, getRightOf } from "../Plateau/direction";
import { Rover } from "../Plateau/rover";
import { Action } from "./movement";

export const rotateLeft: Action = (rover: Rover): Rover => ({
  ...rover,
  facingTowards: getLeftOf(rover.facingTowards),
});
export const rotateRight: Action = (rover: Rover): Rover => ({
  ...rover,
  facingTowards: getRightOf(rover.facingTowards),
});
