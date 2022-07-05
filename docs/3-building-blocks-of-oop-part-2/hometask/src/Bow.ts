import { Weapon } from "./Weapon";
// your code goes here

const MAX_BOW_DURABILITY = 1;
export class Bow extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super("bow", baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        const newDurabilityModifier = this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE;
        const newDurability = this.getBaseDurability() + newDurabilityModifier;
        if (newDurability <= MAX_BOW_DURABILITY) {
            this.setDurabilityModifier(newDurabilityModifier);
        } else {
          this.setDurabilityModifier(MAX_BOW_DURABILITY - this.getBaseDurability());
        }
    }
}