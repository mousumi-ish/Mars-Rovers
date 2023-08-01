import { Direction } from "./roverDirection";
//import { Rover } from "./rover";

describe("Execute", () => {
  const initialRover = {
    x: 0,
    y: 0,
    facing: Direction.North,
  };
  test.each`
    command   | newPosition
    ${"RR"}   | ${"0:0:S"}
    ${"RRR"}  | ${"0:0:W"}
    ${"RRRR"} | ${"0:0:N"}
  `(
    "For given '$command' output will be $newPosition",
    ({ expectedOutput }) => {
      expect("RR").toBe(expectedOutput);
    }
  );
});
