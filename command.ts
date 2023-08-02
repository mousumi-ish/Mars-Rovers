import { Rover } from "./rover";
import { newPosition } from "./state";

export class Command {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  execute(instructions: string): newPosition {
    instructions.split("").forEach((instruction) => {
      switch (instruction) {
        case "L":
        case "R":
          {
            this.rover.turn(instruction);
          }
          break;
        case "M":
          this.rover.move();
          break;
      }
    });
    return this.rover.state;
  }
}
