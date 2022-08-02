interface ShipperInterface {
  rate: number;
  additionCharge: number;
  additionalRate: number;
  setRate(packageType: string): void;
}

export default ShipperInterface;