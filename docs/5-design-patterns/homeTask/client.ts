import Shipment from "./shipment";

type ClientArgs = {
  fromAdd?: string;
  fromZip?: string;
  toAdd?: string;
  toZip?: string;
  weight?: number;
}

function configureFromAddressAndZip(fromAdd?: string, fromZip?: string): void {
  const shipment = Shipment.getInstance();
  if (fromAdd) {
    shipment.setFromAddress(fromAdd);
  }
  if (fromZip) {
    shipment.setFromZipCode(fromZip);
  }
}

function configureToAddressAndZip(toAdd?: string, toZip?: string): void {
  const shipment = Shipment.getInstance();
  if (toAdd) {
    shipment.setToAddress(toAdd);
  }
  if (toZip) {
    shipment.setToZipCode(toZip);
  }
}

function configureWeight(weight?: number): void {
  if (weight !== undefined) {
    Shipment.getInstance().setWeight(weight);
  }
}

function client({
  fromAdd,
  fromZip,
  toAdd,
  toZip,
  weight
}: ClientArgs) {
  const shipment = Shipment.getInstance();
  configureFromAddressAndZip(fromAdd, fromZip);
  configureToAddressAndZip(toAdd, toZip);
  configureWeight(weight);
  shipment.getShipmentID();
  console.log(shipment.ship());
}

const args1 = {
  fromAdd: "123 Main St",
  fromZip: "12345",
  toAdd: "456 Main St",
  toZip: "54321",
  weight: 10
}
const args2 = {
  weight: 10
}

client(args1);
client(args2);