import Shipment from "./shipment";
import Shipper from "./shipper";

class OversizedShipment extends Shipment {
  public constructor() {
    super();
    Shipper.setPackageType("oversized");
  }
}

export default OversizedShipment;
