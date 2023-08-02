import { Rover } from "./rover";
import { getActionOf } from "./roverAction";

export const execute = (command: string, rover: Rover): string => {
  const finalPosition = [...command].reduce(
    (rover, command) => getActionOf(command)(rover),
    rover
  );
  const printPosition = (rover: Rover) =>
    `${rover.x}:${rover.y}:${rover.facingTowards}`;

  return printPosition(finalPosition);
};
