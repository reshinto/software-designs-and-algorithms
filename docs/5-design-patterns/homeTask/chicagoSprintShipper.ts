import ShipperInterface from "./shipperInterface";

class ChicagoSprintShipper implements ShipperInterface {
  public rate = 42;
  public additionCharge = 0;
  public additionalRate = 0;
  private packageType: string;

  public constructor(packageType?: string) {
    this.packageType = packageType || "letter";
  }

  public setRate() {
    switch (this.packageType) {
      case "letter": {
        this.rate = 42;
        this.additionalRate = 0;
        break;
      }
      case "package": {
        this.rate = 20;
        this.additionalRate = 0;
      }
      case "oversized": {
        this.rate = 20;
        this.additionalRate = 20;
        break;
      }
      default: {
        this.rate = 42;
        this.additionalRate = 0;
        break;
      }
    }
  }
}

export default ChicagoSprintShipper;