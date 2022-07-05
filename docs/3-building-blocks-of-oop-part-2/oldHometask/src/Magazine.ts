import { Item } from "./Item";
import {Pages} from "./Pages";

export class Magazine extends Item {
  private title: string = "";

  constructor(title: string, pages: Pages) {
    super(pages);
    this.title = title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }

  public toString(): string {
    return `Magazine: ${this.title} with number of pages: ${this.pages.length}`;
  }
}
