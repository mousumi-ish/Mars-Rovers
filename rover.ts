import { Plateau } from "./plateau";
import { newPosition } from "./state";

export class Rover {
  state: newPosition;
  plateau: Plateau;

  constructor(state: newPosition, plateau: Plateau) {
    this.state = state;
    this.plateau = plateau;
  }
  //checking the boundary of plateau. If not inside the boundary then it will throw error.
  move(): void {
    if (
      this.state.coordinate.y > this.plateau.n ||
      this.state.coordinate.x > this.plateau.m ||
      this.state.coordinate.y < 0 ||
      this.state.coordinate.x < 0
    ) {
      throw new Error("Obstacles , can't move");
    }
    switch (this.state.direction) {
      case "N":
        this.state.coordinate.y++;
        break;
      case "W":
        this.state.coordinate.x--;
        break;
      case "E":
        this.state.coordinate.x++;
        break;
      case "S":
        this.state.coordinate.y--;
        break;
    }
  }

  turn(turnCommand: string): void {
    switch (turnCommand) {
      case "L":
        {
          switch (this.state.direction) {
            case "E":
              this.state.direction = "N";
              break;
            case "W":
              this.state.direction = "S";
              break;
            case "N":
              this.state.direction = "W";
              break;
            case "S":
              this.state.direction = "E";
              break;
          }
        }
        break;
      case "R":
        {
          switch (this.state.direction) {
            case "E":
              this.state.direction = "S";
              break;
            case "W":
              this.state.direction = "N";
              break;
            case "N":
              this.state.direction = "E";
              break;
            case "S":
              this.state.direction = "W";
              break;
          }
        }
        break;
      default:
        break;
    }
  }
}
