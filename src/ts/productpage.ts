import { Item } from "./models/item";
import { products } from "./models/itemArray";

function createHTMLProductlist(products: Item[]) {
  for (let i = 0; i < products.length; i++) {
    let itemContainer = document.createElement("div") as HTMLDivElement;
    let img = document.createElement("img") as HTMLImageElement;
    let title = document.createElement("h1") as HTMLHeadingElement;
    let desc = document.createElement("p") as HTMLParagraphElement;
    let size = document.createElement("p") as HTMLParagraphElement;
    let articleNumber = document.createElement("p") as HTMLParagraphElement;
    let price = document.createElement("p") as HTMLParagraphElement;
  }
}
