import { Comparable } from './Comparable';

let id = 0;

const memo = {
    counter: 0
}

export abstract class Item implements Comparable<Item> {
    private static numberOfItems: number = memo.counter;
    private id: number;
    private value: number;
    private name: string;
    private weight: number;

    // your code goes here
    constructor(name: string, value: number, weight: number) {
        this.id = memo.counter;
        memo.counter++;
        Item.numberOfItems = memo.counter;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    public compareTo(other: Item): number {
        // your code goes here
        if (this.value > other.getValue()) {
            return 1;
        } else if (this.value < other.getValue()) {
            return -1;
        }
        if (this.name.toLowerCase() > other.getName().toLowerCase()) {
            return 1;
        } else if (this.name.toLowerCase() < other.getName().toLowerCase()) {
            return -1;
        }
        return 0;
    }

    public use(): void {}

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }

    public getId(): number {
        return this.id;
    }

    public getValue(): number {
        return this.value;
    }

    public getName(): string {
        return this.name;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setValue(price: number): void {
        this.value = price;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public static reset(): void {
        memo.counter = 0;
    }
}
