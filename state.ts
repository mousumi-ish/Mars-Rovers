import { Direction } from "./direction";
import { Position } from "./position";

export class newPosition {
  coordinate: Position;
  direction: Direction;
  constructor(position: Position, direction: Direction) {
    this.coordinate = position;
    this.direction = direction;
  }
}
