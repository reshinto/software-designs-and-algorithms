import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";
// your code goes here

export class Inventory {
    private items: Item[];

    constructor() {
        this.items = [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }
    
    public sort(comparator?: ItemComparator): void {
        if (comparator) {
          this.items.sort((a, b) => comparator.compare(a, b));
        } else {
          this.items.sort((a, b) => a.getValue() - b.getValue());
        }
    }

    public toString(): string {
        return this.items.join(", ");
    }
}