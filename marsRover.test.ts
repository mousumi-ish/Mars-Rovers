import { Rover } from "./rover";
import { Plateau } from "./plateau";
import { Command } from "./command";
import { Position } from "./position";
import { Direction } from "./direction";
import { newPosition } from "./state";
describe("Moving rover", () => {
  it("should throw an error if given coordinates are outside the max coordinate", () => {
    let plateau = new Plateau(5, 5);
    let rover = new Rover(
      new newPosition(new Position(1, 6), Direction.N),
      plateau
    );
    let command = new Command(rover);
    expect(() => {
      command.execute("LLMM");
    }).toThrow("Obstacles , can't move");
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
