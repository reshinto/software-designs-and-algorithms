import { Consumable } from "./Consumable";
// your code goes here

export class Pizza extends Consumable {
    private numberOfSlices: number;
    private slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super("Pizza", 10, 1, spoiled);
        this.numberOfSlices = numberOfSlices;
        this.slicesEaten = 0;
    }
    
    public eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return `You ate a slice of the ${this.getName()}.`;
        } else {
            return "";
        }
    }
}