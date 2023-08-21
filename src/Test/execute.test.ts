import { execute } from "../Plateau/execute";
import { Direction } from "../Plateau/direction";

describe("Execute the new position of rover after instructions", () => {
  const initialRover = {
    x: 1,
    y: 2,
    facingTowards: Direction.North,
  };

  test("should return $5:1:E if input is '$MMRMMRMRRM'", () => {
    const output = execute("LMLMLMLMM", initialRover);
    expect(output).toBe("1:3:N");
  });
});
describe("Execute", () => {
  const initialRover = {
    x: 3,
    y: 3,
    facingTowards: Direction.East,
  };
  test("should return $5:1:E if input is '$MMRMMRMRRM'", () => {
    const output = execute("MMRMMRMRRM", initialRover);
    expect(output).toBe("5:1:E");
  });
});
