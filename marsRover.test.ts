import { Rover } from "./rover";
import { Plateau } from "./plateau";
import { Command } from "./command";
import { Position } from "./position";
import { Direction } from "./direction";
import { newPosition } from "./state";
/*describe("Moving rover", () => {
  it("should throw an error if given coordinates are outside the max coordinate", () => {
    let plateau = new Plateau(5, 5);
    let rover = new Rover(
      new newPosition(new Position(1, 6), Direction.N),
      plateau
    );
    let command = new Command(rover);
    expect(() => {
      command.execute("LLMM");
    }).toThrowError("Obstacles , can't move");
  });
});
//checking for input 1,2 N and the direction of movement LMLMLMLMMM

test("Move rover on the plateau for given co-ordinates and direction", () => {
  let plateau = new Plateau(5, 5);

  let rover = new Rover(
    new newPosition(new Position(1, 2), Direction.N),
    plateau
  );

  let command = new Command(rover);

  expect(command.execute("LMLMLMLMM")).toEqual(
    new newPosition(new Position(1, 3), Direction.N)
  );
});

test("Move rover on the plateau for given co-ordinates and direction", () => {
  let plateau = new Plateau(5, 5);

  let rover = new Rover(
    new newPosition(new Position(0, 0), Direction.N),
    plateau
  );

  let command = new Command(rover);

  expect(command.execute("RM")).toEqual(
    new newPosition(new Position(1, 0), Direction.E)
  );
});*/
describe("CommandMoving rover", () => {
  let plateau = new Plateau(5, 5);
  test.each`
    x    | y    | direction1 | m    | n    | direction2 | expectedOutput
    ${7} | ${1} | ${"N"}     | ${7} | ${1} | ${"N"}     | ${"Can't place the new rover in that position"}
  `(
    "Rover already exist on ${x} ${y} ${direction1} ,new Rover can't be placed on ${m}  ${n} ${direction2} and ${expectedOutput}",
    ({ x, y, direction1, m, n, direction2, expectedOutput }) => {
      expect(() => {
        let rover = new Rover(
          new newPosition(new Position(x, y), direction1),
          plateau
        );
        let rover2 = new Rover(
          new newPosition(new Position(m, n), direction2),
          plateau
        );
      }).toThrow(expectedOutput);
    }
  );

  test.each`
    x    | y    | direction | instruction      | expectedOutput
    ${0} | ${0} | ${"N"}    | ${" "}           | ${new newPosition(new Position(0, 0), Direction.N)}
    ${1} | ${2} | ${"N"}    | ${"LMLMLMLMM "}  | ${new newPosition(new Position(1, 3), Direction.N)}
    ${3} | ${3} | ${"E"}    | ${"MMRMMRMRRM "} | ${new newPosition(new Position(5, 1), Direction.E)}
    ${4} | ${4} | ${"W"}    | ${"LM"}          | ${new newPosition(new Position(4, 3), Direction.S)}
  `(
    "Move rover on the plateau for given $x ,$y, $direction,$instruction to $expectedOutput",
    ({ x, y, direction, instruction, expectedOutput }) => {
      let rover = new Rover(
        new newPosition(new Position(x, y), direction),
        plateau
      );
      let command = new Command(rover);
      expect(command.execute(instruction)).toEqual(expectedOutput);
    }
  );
});
test.each`
  x    | y    | direction1 | m    | n    | direction2 | instruction | expectedOutput
  ${8} | ${2} | ${"N"}     | ${8} | ${1} | ${"N"}     | ${"M"}      | ${"Obstacles! other rover is already there"}
`(
  "Obstacles!! existed Rover on the ${x} ,{y} ,${direction1} so, next Rover can't move on position ${m},${n} ,${direction2},${instruction} and ${expectedOutput}",
  ({ x, y, direction1, m, n, direction2, instruction, expectedOutput }) => {
    let rover3 = new Rover(
      new newPosition(new Position(x, y), direction1),
      plateau
    );
    let rover4 = new Rover(
      new newPosition(new Position(m, n), direction2),
      plateau
    );

    let command = new Command(rover4);
    expect(() => {
      command.execute(instruction);
    }).toThrow(expectedOutput);
  }
);
