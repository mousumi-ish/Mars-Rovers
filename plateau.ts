export interface Plateau {
  m: number;
  n: number;
}
export class Plateau implements Plateau {
  m: number;
  n: number;
  constructor(m: number, n: number) {
    this.m = m;
    this.n = n;
  }
}
