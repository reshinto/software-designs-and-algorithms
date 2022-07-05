import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        // your code goes here
        if (first.getWeight() > second.getWeight()) {
            return 1;
        } else if (first.getWeight() < second.getWeight()) {
            return -1;
        }
        return first.compareTo(second);
    }
}
