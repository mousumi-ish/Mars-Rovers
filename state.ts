import { Direction } from "./direction";
import { Position } from "./position";

export class newPosition {
  static id: number = 0;
  coordinate: Position;
  direction: Direction;
  constructor(position: Position, direction: Direction) {
    this.coordinate = position;
    this.direction = direction;
  }
}
