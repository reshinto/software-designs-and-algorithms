import { Weapon } from "./Weapon";
// your code goes here

const POLISH_CAP = 1.25
export class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super("sword", baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        const maxDamage = this.getBaseDamage() * POLISH_CAP;
        const newDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;
        const newDamage = this.getBaseDamage() + newDamageModifier;
        if (newDamage <= maxDamage) {
            this.setDamageModifier(newDamageModifier);
        } else {
          this.setDamageModifier(maxDamage - this.getBaseDamage());
        }
    }
}