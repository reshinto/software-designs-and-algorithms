import { Point } from "./Point";

type ThreeOreMoreArray = [Point, Point, Point, ...Point[]];
export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: ThreeOreMoreArray;

    constructor(points: ThreeOreMoreArray);
    constructor(points: ThreeOreMoreArray, color: string, filled: boolean);
    constructor(points: ThreeOreMoreArray, color?: string, filled?: boolean) {
        if (points.length >= 3) {
            this.points = points;
        } else {
            throw "Shape must have at least 3 points";
        }
        this.color = color ? color : 'green';
        this.filled = filled !== undefined ? filled : true;
    }

    public getPerimeter(): number {
        let total = 0;
        let currentPoint = this.points[0];
        for (let i=this.points.length-1; i>=0; i--) {
            const nextPoint = this.points[i];
            total += currentPoint.distance(nextPoint);
            currentPoint = nextPoint;
        }
        return total;
    }

    public toString(): string {
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${this.points.map(p => p.toString()).join(', ')}.`;
    }

    abstract getType(): string;
}
