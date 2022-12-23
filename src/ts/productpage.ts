import { Item } from "./models/item";
import { products } from "./models/itemArray";

function createHTMLProductlist(products: Item[]) {
  for (let i = 0; i < products.length; i++) {
    //Creates the HTML elements we need:
    let itemContainer = document.createElement("div") as HTMLDivElement;
    let itemImg = document.createElement("img") as HTMLImageElement;
    let itemTitle = document.createElement("h1") as HTMLHeadingElement;
    let itemDesc = document.createElement("p") as HTMLParagraphElement;
    let itemArticleNumber = document.createElement("p") as HTMLParagraphElement;
    let itemSize = document.createElement("p") as HTMLParagraphElement;

    let itemPrice = document.createElement("p") as HTMLParagraphElement;

    //Adds classes to the elements
    itemContainer.classList.add("itemCard");
    itemImg.classList.add("itemCard__image");
    itemTitle.classList.add("itemCard__title");
    itemDesc.classList.add("itemCard__desc");
    itemArticleNumber.classList.add("itemCard__articleNumber");
    itemSize.classList.add("itemCard__size");

    //Adds id

    //Adds content to the elements
    //itemImg.innerHTML =
    itemTitle.innerText = products[i].title;
    itemDesc.innerText = products[i].desc;
    itemArticleNumber.innerText = products[i].articleNumber;
    itemSize.innerText = products[i].size;

    //Adds elements to page
    let flexContainer = document.getElementsByClassName("flexContainer");

    itemContainer.appendChild;
  }
}
