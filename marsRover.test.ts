import { Rover } from "./rover";
import { Plateau } from "./plateau";
import { Command } from "./command";
import { Position } from "./position";
import { newPosition } from "./state";
describe("Moving rover", () => {
  it("should throw an error if given coordinates are outside the max coordinate", () => {
    let plateau = new Plateau(5, 5);
    let rover = new Rover(new newPosition(new Position(1, 6), "N"), plateau);
    let command = new Command(rover);
    expect(() => {
      command.execute("LLMM");
    }).toThrowError("Obstacles , can't move");
  });
});
//checking for input 1,2 N and the direction of movement LMLMLMLMMM

test("Move rover on the plateau for given co-ordinates and direction", () => {
  let plateau = new Plateau(5, 5);

  let rover = new Rover(new newPosition(new Position(1, 2), "N"), plateau);

  let command = new Command(rover);

  expect(command.execute("LMLMLMLMM")).toEqual(
    new newPosition(new Position(1, 3), "N")
  );
});
test("Move rover on the plateau for given co-ordinates and direction", () => {
  let plateau = new Plateau(5, 5);

  let rover = new Rover(new newPosition(new Position(3, 3), "E"), plateau);

  let command = new Command(rover);

  expect(command.execute("MMRMMRMRRM")).toEqual(
    new newPosition(new Position(5, 1), "E")
  );
});
describe("New position of rover after instruction", () => {
  let plateau = new Plateau(5, 5);
  test.each`
    x    | y    | direction | instruction      | expectedOutput
    ${0} | ${0} | ${"N"}    | ${" "}           | ${new newPosition(new Position(0, 0), "N")}
    ${1} | ${2} | ${"N"}    | ${"LMLMLMLMM "}  | ${new newPosition(new Position(1, 3), "N")}
    ${3} | ${3} | ${"E"}    | ${"MMRMMRMRRM "} | ${new newPosition(new Position(5, 1), "E")}
    ${4} | ${4} | ${"W"}    | ${"LM"}          | ${new newPosition(new Position(4, 3), "S")}
  `(
    "Move rover on the plateau for given $x ,$y, $direction,$instruction to $expectedOutput",
    ({ x, y, direction, instruction, expectedOutput }) => {
      let rover = new Rover(
        new newPosition(new Position(x, y), direction),
        plateau
      );
      let command = new Command(rover);
      expect(command.execute(instruction)).toStrictEqual(expectedOutput);
    }
  );
});
