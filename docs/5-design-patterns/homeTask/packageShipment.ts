import Shipment from "./shipment";
import Shipper from "./shipper";

class PackageShipment extends Shipment {
  public constructor() {
    super();
    Shipper.setPackageType("package");
  }
}

export default PackageShipment;
