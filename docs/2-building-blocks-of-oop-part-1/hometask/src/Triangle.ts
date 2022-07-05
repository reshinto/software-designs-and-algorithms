import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
  private v1: Point;
  private v2: Point;
  private v3: Point;

  constructor(v1: Point, v2: Point, v3: Point);
  constructor(v1: Point, v2: Point, v3: Point, color: string, filled: boolean);
  constructor(v1: Point, v2: Point, v3: Point, color?: string, filled?: boolean) {
    super([v1, v2, v3], color as string, filled as boolean);
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }

  public toString(): string {
    return `Triangle[v1=${this.v1.toString()},v2=${this.v2.toString()},v3=${this.v3.toString()}]`;
  }

  public getType(): string {
    const side1 = this.v1.distance(this.v2);
    const side2 = this.v2.distance(this.v3);
    const side3 = this.v3.distance(this.v1);
    if (side1 === side2 && side2 === side3) {
      return "equilateral triangle";
    } else if (side1 === side2 || side2 === side3 || side3 === side1) {
      return "isosceles triangle";
    }
    return "scalene triangle"
  }
}
