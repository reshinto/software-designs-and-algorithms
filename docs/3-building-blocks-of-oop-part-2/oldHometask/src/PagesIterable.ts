import { Pages } from "./Pages";

type Constructor = new (...args: any[]) => any;

export function PagesIterable<Base extends Constructor>(base: Base) {
  return class extends base {
    protected pages: Pages = [];

    *[Symbol.iterator](): Iterator<string> {
        for (let page of this.pages) {
            yield `${this.toString()}, ${page.toString()}`;
        }
    }
  }

}