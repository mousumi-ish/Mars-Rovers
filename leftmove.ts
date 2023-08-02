import { leftMovement } from "./roverDirection";
import { Rover } from "./rover";
import { Action } from "./roverAction";

export const rotateLeft: Action = (rover: Rover): Rover => ({
  ...rover,

  facingTowards: leftMovement(rover.facingTowards),
});
