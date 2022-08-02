import ShipperInterface from "./shipperInterface";

class PacificParcelShipper implements ShipperInterface {
  public rate = 51;
  public additionCharge = 0;
  public additionalRate = 0;

  private packageType: string;

  public constructor(packageType?: string) {
    this.packageType = packageType || "letter";
  }

  public setRate() {
    switch (this.packageType) {
      case "letter": {
        this.rate = 51;
        this.additionalRate = 0;
        break;
      }
      case "package": {
        this.rate = 19;
        this.additionalRate = 0;
        break;
      }
      case "oversized": {
        this.rate = 19;
        this.additionalRate = 2;
        break;
      }
      default: {
        this.rate = 51;
        this.additionalRate = 0;
        break;
      }
    }
  }
}

export default PacificParcelShipper;