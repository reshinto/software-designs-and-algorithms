import ShipperInterface from "./shipperInterface";

class AirEastShipper implements ShipperInterface {
  public rate = 39;
  public additionCharge = 0;
  public additionalRate = 0;
  private packageType: string;

  public constructor(packageType?: string) {
    this.packageType = packageType || "letter";
  }

  public setRate(): void {
    switch (this.packageType) {
      case "letter": {
        this.rate = 39;
        this.additionCharge = 0;
        this.additionalRate = 0;
        break;
      }
      case "package": {
        this.rate = 25;
        this.additionCharge = 0;
        this.additionalRate = 0;
        break;
      }
      case "oversized": {
        this.rate = 25;
        this.additionCharge = 10;
        this.additionalRate = 25;
        break;
      }
      default: {
        this.rate = 39;
        this.additionCharge = 0;
        this.additionalRate = 0;
        break;
      }
    }
  }
}

export default AirEastShipper;