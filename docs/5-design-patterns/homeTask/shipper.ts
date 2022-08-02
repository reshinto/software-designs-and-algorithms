import AirEastShipper from "./airEastShipper";
import ChicagoSprintShipper from "./chicagoSprintShipper";
import PacificParcelShipper from "./pacificParcelShipper";
import ShipperInterface from "./shipperInterface";

// might be better if this class was not a singleton
class Shipper {
  private static instance: Shipper;
  private static packageType: string;
  private shipperStrategy: ShipperInterface = new AirEastShipper();

  private constructor() {}

  public static getInstance(): Shipper {
    if (!Shipper.instance) {
      Shipper.instance = new Shipper();
    }
    return Shipper.instance;
  }

  public static configureShipper(fromZip?: string): void {
    const instance = Shipper.getInstance();
    if (fromZip) {
      switch (Number(fromZip[0])) {
        case 1:
        case 2:
        case 3: {
          instance.setShipper(new AirEastShipper(Shipper.packageType));
          break;
        }
        case 4:
        case 5:
        case 6: {
          instance.setShipper(new ChicagoSprintShipper(Shipper.packageType));
          break;
        }
        case 7:
        case 8:
        case 9: {
          instance.setShipper(new PacificParcelShipper(Shipper.packageType));
          break;
        }
        default: {
          instance.setShipper(new AirEastShipper(Shipper.packageType));
          break;
        }
      }
    } else {
      instance.setShipper(new AirEastShipper(Shipper.packageType));
    }
  }

  public static setPackageType(packageType: string): void {
    Shipper.packageType = packageType;
  }

  private setShipper(shipper: ShipperInterface): void {
    this.shipperStrategy = shipper;
  }

  public getCost(totalWeight: number): number {
    const additionWeight = totalWeight > 160 ? totalWeight - 160 : 0;
    const weight = totalWeight - additionWeight;
    return this.shipperStrategy.rate * weight + this.shipperStrategy.additionCharge + additionWeight * this.shipperStrategy.additionalRate;
  }
}

export default Shipper;