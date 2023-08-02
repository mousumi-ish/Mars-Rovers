import { Rover } from "./rover";
import { rotateRight } from "./rightmove";
import { rotateLeft } from "./leftmove";
import { move } from "./move";

export type Action = (rover: Rover) => Rover;

export const getActionOf = (command: string): Action => {
  if (!commandToActions.get(command)) {
    throw new Error();
  }
  return commandToActions.get(command) as Action;
};

const commandToActions = new Map<string, Action>([
  ["R", rotateRight],
  ["L", rotateLeft],
  ["M", move],
]);
