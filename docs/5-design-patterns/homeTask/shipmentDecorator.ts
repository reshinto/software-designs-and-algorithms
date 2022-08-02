import Shipment from "./shipment";

class ShipmentDecorator extends Shipment {
  public constructor(shipment: Shipment) {
    super();
    ShipmentDecorator.instance = shipment;
  }

  public ship(): string {
    const additionalMsg = "**MARK FRAGILE**\n" +
      "**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**\n" +
      "**MARK RETURN RECEIPT REQUESTED**";
    return `${ShipmentDecorator.instance.ship()}\n${additionalMsg}`;
  }
}

export default ShipmentDecorator;