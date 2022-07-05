export class Point {
  private x: number;
  private y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x ? x : 0;
    this.y = y ? y : 0;
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(point: Point): number;
  public distance(point?: Point): number;
  public distance(x: number, y: number): number;
  public distance(x?: number | Point, y?: number): number {
    let newX = 0;
    let newY = 0;
    if (x instanceof Point) {
      newX = x.x;
      newY = x.y;
    } else {
      newX = x ? x : 0;
      newY = y ? y : 0;
    }
    const distX = Math.abs(newX - this.x);
    const distY = Math.abs(newY - this.y);
    return Math.round(Math.sqrt(distX * distX + distY * distY));
  }
}
