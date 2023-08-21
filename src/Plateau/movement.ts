import { Rover } from "./rover";

import { rotateLeft, rotateRight } from "./rotation";
import { move } from "./grid";

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
