import { Rover } from "./rover";
import { getActionOf } from "./movement";

const positionAfterMove = (rover: Rover) =>
  `${rover.x}:${rover.y}:${rover.facingTowards}`;
export const execute = (command: string, rover: Rover): String => {
  const finalPosition = [...command].reduce(
    (rover, command) => getActionOf(command)(rover),
    rover
  );

  return positionAfterMove(finalPosition);
};
