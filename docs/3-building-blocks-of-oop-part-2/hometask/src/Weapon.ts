import { Item } from "./Item";
// your code goes here

export abstract class Weapon extends Item {
    public static MODIFIER_CHANGE_RATE: number = 0.05;
    private baseDamage: number = 0;
    private damageModifier: number = 0;
    private baseDurability: number = 0;
    private durabilityModifier: number = 0;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
    }

    public polish(): void {}

    public use(): string {
        if (this.getDurability() * 100 <= 0) {
            return `You can't use the ${this.getName()}, it is broken.`;
        }
        const newDurability = (this.getDurability() - Weapon.MODIFIER_CHANGE_RATE) * 100;
        if (newDurability > 0) {
            return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.`;
        }
        return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage. The ${this.getName()} breaks.`;
    }

    public toString(): string {
      return `${this.getName()} - Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability() * 100}%`;
    }

    public getBaseDamage(): number {
        return this.baseDamage;
    }

    public getBaseDurability(): number {
        return this.baseDurability;
    }

    public getDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability(): number {
        return (this.baseDurability + this.durabilityModifier);
    }

    public getDamageModifier(): number {
        return this.damageModifier;
    }

    public setDamageModifier(damageModifier: number): void {
        this.damageModifier = damageModifier;
    }

    public getDurabilityModifier(): number {
        return this.durabilityModifier;
    }

    public setDurabilityModifier(durabilityModifier: number): void {
        this.durabilityModifier = durabilityModifier;
    }
}