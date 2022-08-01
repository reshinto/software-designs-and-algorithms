class Shipment {
  private static instance: Shipment;
  private rate = 39;
  private shipmentID = 0;
  private weight = 0;
  private fromAddress = "";
  private fromZipCode = "";
  private toAddress = "";
  private toZipCode = "";

  private constructor() {}

  public static getInstance() {
    if (!Shipment.instance) {
      Shipment.instance = new Shipment();
    }

    return Shipment.instance;
  }

  public getShipmentID() {
    return ++this.shipmentID;
  }

  public ship() {
    return `Shipment ${this.shipmentID} ` +
    `from ${this.getFromAddress()} ${this.getFromZipCode()} ` +
    `to ${this.getToAddress()} ${this.getToZipCode()}, ` +
    `cost ${this.getCost()}`;
  }

  private getCost() {
    return this.weight * this.rate;
  }

  public setWeight(weight: number) {
    this.weight = weight;
  }

  private getFromAddress() {
    if (!this.fromAddress) {
      throw new Error("From address is not set");
    }
    return this.fromAddress;
  }

  public setFromAddress(address: string) {
    this.fromAddress = address;
  }

  private getFromZipCode() {
    if (!this.fromZipCode) {
      throw new Error("From zip code is not set");
    }
    return this.fromZipCode;
  }

  public setFromZipCode(zipCode: string) {
    if (zipCode.length === 5) {
      this.fromZipCode = zipCode;
    } else {
      throw new Error("Invalid zip code");
    }
  }

  private getToAddress() {
    if (!this.toAddress) {
      throw new Error("To address is not set");
    }
    return this.toAddress;
  }

  public setToAddress(address: string) {
    this.toAddress = address;
  }

  private getToZipCode() {
    if (!this.toZipCode) {
      throw new Error("To zip code is not set");
    }
    return this.toZipCode;
  }

  public setToZipCode(zipCode: string) {
    if (zipCode.length === 5) {
      this.toZipCode = zipCode;
    } else {
      throw new Error("Invalid zip code");
    }
  }
}

export default Shipment;