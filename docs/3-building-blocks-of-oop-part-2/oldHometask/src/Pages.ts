import { Page } from "./Page";

export class Pages extends Array<Page> {
    constructor(pages: Pages) {
        super(...pages);
    }
}