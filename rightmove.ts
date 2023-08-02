import { rightMovement } from "./roverDirection";
import { Rover } from "./rover";
import { Action } from "./roverAction";

export const rotateRight: Action = (rover: Rover): Rover => ({
  ...rover,
  facingTowards: rightMovement(rover.facingTowards),
});
