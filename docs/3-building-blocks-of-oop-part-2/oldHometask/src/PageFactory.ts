import { Page } from "./Page";

export const PageFactory = (numOfPages: number, type: string) => {
  let contentType = "";
  let material = "";
  let pages: Page[] = [];

  switch (type) {
    case "book":
      contentType = "with text";
      material = "simple paper";
      break;
    case "magazine":
      contentType = "with article";
      material = "glossy paper";
      break;
    case "comics":
      contentType = "with images";
      material = "glossy paper";
      break;
    default:
      break;
  }

  for (let i = 1; i <= numOfPages; i++) {
    pages.push(new Page(i, contentType, material));
  }

  return pages;
}