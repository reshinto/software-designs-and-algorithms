import Shipment from "./shipment";
import Shipper from "./shipper";

class LetterShipment extends Shipment {
  public constructor() {
    super();
  }

  public static getInstance(): Shipment {
    if (!LetterShipment.instance) {
      LetterShipment.instance = Shipment.getInstance();
    }
    Shipper.setPackageType("letter");
    return LetterShipment.instance;
  }
}

export default LetterShipment;