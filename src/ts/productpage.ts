import { Item } from "./models/item";
import { products } from "./models/itemArray";
import { ShoppingCart } from "./models/ShoppingCart";

let cartItemsLS: ShoppingCart[] = [];

/*
let cart = new ShoppingCart (0, []);



function addToCart(product:Item){

  let r = cart.itemList.push(product);

  //console.log(r);

}*/

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
    let addBtn = document.createElement("button") as HTMLButtonElement;

    //Adds classes to the elements
    itemContainer.classList.add("itemCard");
    itemImg.classList.add("itemCard__image");
    itemTitle.classList.add("itemCard__title");
    itemDesc.classList.add("itemCard__desc");
    itemArticleNumber.classList.add("itemCard__articleNumber");
    itemPrice.classList.add("itemCard__price");
    itemSize.classList.add("itemCard__size");
    addBtn.classList.add("itemCard__addBtn");

    //Eventlistener for adding to cart
    addBtn.addEventListener("click", () => {
      //addToCart(products[i]);
      console.log(products[i]);
    });

    //Adds id

    //Adds content to the elements
    itemImg.src = products[i].imageUrl;
    itemImg.alt = "";
    itemTitle.innerText = products[i].title;
    itemDesc.innerText = products[i].desc;
    itemPrice.innerText = products[i].price.toString() + " kr";
    itemArticleNumber.innerText =
      "Artikel nummer: " + products[i].articleNumber;
    itemSize.innerText = "Storlek: " + products[i].size;
    addBtn.innerHTML = "Köp";

    //Adds elements to page
    let flexContainer = document.getElementById(
      "flexContainer"
    ) as HTMLDivElement;

    flexContainer.appendChild(itemContainer);
    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemDesc);
    itemContainer.appendChild(itemArticleNumber);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(itemSize);
    itemContainer.appendChild(addBtn);
  }
}

createHTMLProductlist(products);
