`use strict`;
import { Direction } from "./roverDirection";
import { execute } from "./commandToMove";
//const inputValues = readFileSync('marsRoverInputFile.txt', 'utf8').split('\r\n');

describe("Execute", () => {
  const initialRover = {
    x: 0,
    y: 0,
    facingTowards: Direction.North,
  };

  test.each`
    command   | newPosition
    ${"RR"}   | ${"0:0:S"}
    ${"RRR"}  | ${"0:0:W"}
    ${"RRRR"} | ${"0:0:N"}
  `(
    "For given '$command' output will be $newPosition",
    ({ command, newPosition }) => {
      const output = execute(command, initialRover);
      expect(output).toBe(newPosition);
    }
  );
});
