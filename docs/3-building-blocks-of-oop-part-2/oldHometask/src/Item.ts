import { Pages } from "./Pages";
import { PagesIterable } from "./PagesIterable";

export abstract class Item extends PagesIterable(Pages) {
  public abstract toString(): string;
}
