import AirEastShipper from "./airEastShipper";
import ChicagoSprintShipper from "./chicagoSprintShipper";
import PacificParcelShipper from "./pacificParcelShipper";
import ShipperInterface from "./shipperInterface";

class Shipper {
  private static instance: Shipper;
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
          instance.setShipper(new AirEastShipper());
          break;
        }
        case 4:
        case 5:
        case 6: {
          instance.setShipper(new ChicagoSprintShipper());
          break;
        }
        case 7:
        case 8:
        case 9: {
          instance.setShipper(new PacificParcelShipper());
          break;
        }
        default: {
          instance.setShipper(new AirEastShipper());
          break;
        }
      }
    } else {
      instance.setShipper(new AirEastShipper());
    }
  }

  private setShipper(shipper: ShipperInterface): void {
    this.shipperStrategy = shipper;
  }

  public getCost(weight: number): number {
    return this.shipperStrategy.rate * weight;
  }
}

export default Shipper;