import Shipment from "./shipment";
import Shipper from "./shipper";

class PackageShipment extends Shipment {
  public constructor() {
    super();
  }

  public static getInstance(): Shipment {
    if (!PackageShipment.instance) {
      PackageShipment.instance = Shipment.getInstance();
    }
    Shipper.setPackageType("package");
    return PackageShipment.instance;
  }
}

export default PackageShipment;
