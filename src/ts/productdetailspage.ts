import { products } from "./models/itemArray";
import { Item } from "./models/item";
//import { selectedItem } from "./productpage";

//let getProduct: string = localStorage.getItem("products");
/*function getCurrentObject (getCurrentProduct: string) {
  let getCurrentProduct: null = localStorage.getItem("product");
  return getCurrentProduct;
}
getCurrentObject(value as string)*/
//let getCurrentProduct = localStorage.getItem("product");

//JSON.parse(getCurrentProduct);
//createHTMLExtendedProductInfo(selectedItem);
/*
function clickForInfo(clickedProduct: Item) {
  let infoArray: Item = new Item()
}*/
/*
function getClickedObject (product: Item) {
  let i: number = 0;
  let currentItem: Item = new Item(products.);
  let currentItemObject = JSON.parse(localStorage.getItem("product") || "{}");
  currentItem.push(currentItemObject);
  console.log(currentItem);
  console.log(currentItemObject);
}
getClickedObject();*/

export function createHTMLExtendedProductInfo(product:Item) {
    let cartContainer = document.querySelector(".offcanvas-body")as HTMLDivElement;
    cartContainer.innerHTML="";
    for(let i=0;i<products.length;i++){
      //Creates the HTML elements we need:
      let itemContainer = document.createElement("div") as HTMLDivElement;
      let itemImg = document.createElement("img") as HTMLImageElement;
      let itemTitle = document.createElement("h1") as HTMLHeadElement;
      let itemPrice = document.createElement("p") as HTMLParagraphElement;
      let itemQuantity = document.createElement("p") as HTMLParagraphElement;
  
      //Adds classes to the elements:
      itemContainer.classList.add("itemCard--small");
      itemImg.classList.add("itemCard__image--small");
      itemTitle.classList.add("itemCard__title--small");
      itemPrice.classList.add("itemCard__price--small");
      itemQuantity.classList.add("itemCard__quantity--small");
  
        //Adds content to the elements
        itemImg.src = products[i].imageUrlLarge;
        itemImg.alt = "";
        itemTitle.innerText = products[i].title;
        itemPrice.innerText = products[i].price.toString() + " kr";
        itemQuantity.innerText = "Antal: " + products[i].quantity.toString();
  
        //Adds elements to page
        itemContainer.appendChild(itemImg);
        itemContainer.appendChild(itemTitle);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(itemQuantity);
        cartContainer.appendChild(itemContainer);

        console.log(products[i]);
  
    }
  }


  
  
  
  
  
  