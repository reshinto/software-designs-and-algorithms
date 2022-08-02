import Shipment from "./shipment";
import Shipper from "./shipper";

class OversizedShipment extends Shipment {
  public constructor() {
    super();
  }

  public static getInstance(): Shipment {
    if (!OversizedShipment.instance) {
      OversizedShipment.instance = Shipment.getInstance();
    }
    
    Shipper.setPackageType("oversized");
    return OversizedShipment.instance;
  }
}

export default OversizedShipment;
