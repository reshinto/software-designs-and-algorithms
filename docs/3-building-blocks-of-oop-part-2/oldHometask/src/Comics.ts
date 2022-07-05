import { Item } from "./Item";
import {Pages} from "./Pages";

export class Comics extends Item {
  private title: string = "";
  private author: string = "";
  private artist: string = "";

  constructor(title: string, author: string, artist: string, pages: Pages) {
    super(pages);
    this.title = title;
    this.author = author;
    this.artist = artist;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }

  public setAuthor(author: string): void {
    this.author = author;
  }

  public getAuthor(): string {
    return this.author;
  }

  public setArtist(artist: string): void {
    this.artist = artist;
  }

  public getArtist(): string {
    return this.artist;
  }

  public toString(): string {
    return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.length}`;
  }
}