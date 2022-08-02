import Shipment from "./shipment";
import Shipper from "./shipper";

class LetterShipment extends Shipment {
  public constructor() {
    super();
    Shipper.setPackageType("letter");
  }
}

export default LetterShipment;