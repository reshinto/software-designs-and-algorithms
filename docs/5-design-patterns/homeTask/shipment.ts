import DecoratorInterface from "./decoratorInterface";
import Shipper from "./shipper";

// this would be a lot easier if we write this as an abstract class than to a singleton
class Shipment implements DecoratorInterface {
  public static instance: Shipment;
  public shipmentID = 0;
  protected weight = 0;
  private fromAddress = "";
  private fromZipCode = "";
  private toAddress = "";
  private toZipCode = "";

  public constructor() {}

  public static getInstance(): Shipment {
    if (!Shipment.instance) {
      Shipment.instance = new Shipment();
    }
    return Shipment.instance;
  }

  public getShipmentID(): number {
    return ++this.shipmentID;
  }

  public ship(): string {
    Shipper.configureShipper(this.getFromZipCode());
    return `Shipment with the ID ${this.getShipmentID()} ` +
    `will be picked up from ${this.getFromAddress()} ${this.getFromZipCode()} ` +
    `and shipped to ${this.getToAddress()} ${this.getToZipCode()}\n` +
    `Cost = ${this.getCost()} cents`;
  }

  private getCost(): number {
    return Shipper.getInstance().getCost(this.weight);
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }

  private getFromAddress(): string {
    if (!this.fromAddress) {
      throw new Error("From address is not set");
    }
    return this.fromAddress;
  }

  public setFromAddress(address: string): void {
    this.fromAddress = address;
  }

  private getFromZipCode(): string {
    if (!this.fromZipCode) {
      throw new Error("From zip code is not set");
    }
    return this.fromZipCode;
  }

  public setFromZipCode(zipCode: string): void {
    if (zipCode.length === 5) {
      this.fromZipCode = zipCode;
    } else {
      throw new Error("Invalid zip code");
    }
  }

  private getToAddress(): string {
    if (!this.toAddress) {
      throw new Error("To address is not set");
    }
    return this.toAddress;
  }

  public setToAddress(address: string): void {
    this.toAddress = address;
  }

  private getToZipCode(): string {
    if (!this.toZipCode) {
      throw new Error("To zip code is not set");
    }
    return this.toZipCode;
  }

  public setToZipCode(zipCode: string): void {
    if (zipCode.length === 5) {
      this.toZipCode = zipCode;
    } else {
      throw new Error("Invalid zip code");
    }
  }
}

export default Shipment;