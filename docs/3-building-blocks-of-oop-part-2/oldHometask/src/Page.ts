export class Page {
  private pageNumber: number = 0;
  private pageType: string = "";
  private pageMaterial: string = "";

  constructor(pageNumber: number, pageType: string, pageMaterial: string) {
    this.pageNumber = pageNumber;
    this.pageType = pageType;
    this.pageMaterial = pageMaterial;
  }

  public toString(): string {
    return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
  }
}