export interface Grid {
  //Defining the coordinates of rover on the plateau
  m: number;
  n: number;
}
export class Plateau implements Grid {
  m: number;
  n: number;
  constructor(m: number, n: number) {
    this.m = m;
    this.n = n;
  }
}
