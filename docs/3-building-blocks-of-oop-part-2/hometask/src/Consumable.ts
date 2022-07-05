import {Item} from "./Item"
// your code goes here

export abstract class Consumable extends Item {
    private consumed: boolean = false;
    private spoiled: boolean = false;

    constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this.spoiled = spoiled;
    }

    public eat(): string {
      return `You eat the ${this.getName()}.`;
    }

    public use(): string {
        if (!this.consumed) {
            if (this.spoiled) {
                return `${this.eat()}\nYou feel sick.`;
            }
            return this.eat();
        }
        return `There is nothing left of the ${this.getName()} to consume.`;
    }

    public isConsumed(): boolean {
        return this.consumed;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    public isSpoiled(): boolean {
        return this.spoiled;
    }

    public toString(): string {
        return `${this.getName()} - Value: ${this.getValue()}, Wight: ${this.getWeight()}, Consumed: ${this.consumed}, Spoiled: ${this.spoiled}`;
    }
}