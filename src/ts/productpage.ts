//import { createHTMLCartpage } from "./cartpage";
import { addToCart, getLocalStorage } from "./functions";
import { Item } from "./models/item";
import { products } from "./models/itemArray";
import { cart } from "./functions";
import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { createHTMLCartpage } from "./functions";
import { createHTMLExtendedProductInfo } from "./productdetailspage";

//export let selectedItem:Item;

//import { createHTMLCartpage } from "./cartpage"; BUG

//let cart: ShoppingCartItem[] = []; //Samla sådana object i den listan

//let cartFromLS: ShoppingCartItem[] = [];
//let cartItemsLS: ShoppingCartItem[] = [];
/*
const sortDesc: HTMLButtonElement = document.getElementById("#sort-desc") as HTMLButtonElement;
sortDesc.addEventListener("click", () => {
  let sortedItemsDesc= products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1); // Sorts items from size large to small
  console.log(JSON.stringify(sortedItemsDesc));
});*/

// Sort desc
/*let sortedItemsDesc= products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1); // Sorts items from size large to small
console.log(JSON.stringify(sortedItemsDesc));*/

// sort asc
/*
let sortedItemsAsc = products.sort((a: Item, b: Item) => (a.sizeValue < b.sizeValue) ? -1 : 0);
console.log(JSON.stringify(sortedItemsAsc));
*/

/*
const sortDesc = (products: Item[], desc: boolean = true) => {
  return products.sort((a: Item, b: Item) => {
    if (desc) {
      if (a.sizeValue > b.sizeValue) return 1;
      if (a.sizeValue < b.sizeValue) return -1;

      return 0;
    }
  })*/

/*

function sortProductsAsc (products: Item[]) {
  products.sort((a: Item, b: Item) => (a.sizeValue < b.sizeValue) ? 1: -1);
};*/

//let cart = new ShoppingCartItem (0, []);

getLocalStorage();
/*
function addToCart(product:Item){

  let r = cart.itemList.push(product);

  //console.log(r);

}*/
/*
let cartItemsLS: ShoppingCart[] = [];
/*let retrievedItemsFromLS = localStorage.getItem("itemsToLS");
JSON.parse(localStorage.getItem("itemsToLS") || "[{}]");
console.log(retrievedItemsFromLS);
JSON.stringify(retrievedItemsFromLS);*/
/*
export function retrieveCartItemsFromLS(): ShoppingCart[] {
  cartItemsLS = JSON.parse(localStorage.getItem("itemsToLS") || "{}");
  let cartItems = cartItemsLS.map((painting)) => {
    return new ShoppingCart()
  }
}
*/
/*
if (typeof retrievedItemsFromLS === "string") {
  const paintings = JSON.parse(retrievedItemsFromLS);
  JSON.parse(localStorage.getItem("itemsToLS") || "{}");
  console.log(paintings);
 
  
}
*/

//let cartItemsLS: ShoppingCart[] = [];

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
    let productInfoBtn = document.createElement("button") as HTMLButtonElement;
    let anchorProductInfo = document.createElement("a") as HTMLAnchorElement;
    anchorProductInfo.href = "/src/pages/productdetailspage.html";

    //Adds classes to the elements
    itemContainer.classList.add("itemCard");
    itemImg.classList.add("itemCard__image");
    itemTitle.classList.add("itemCard__title");
    itemDesc.classList.add("itemCard__desc");
    itemArticleNumber.classList.add("itemCard__articleNumber");
    itemPrice.classList.add("itemCard__price");
    itemSize.classList.add("itemCard__size");
    addBtn.classList.add("itemCard__addBtn");
    productInfoBtn.classList.add("itemCard__addBtn");

    //Eventlistener for adding to cart
    addBtn.addEventListener("click", () => {
      //addToCart(products[i]);
      /*const cartItem: ShoppingCartItem = new ShoppingCartItem(1, products[i]);
      

    
      cartItemsLS.push(cartItem);
      //cartItemsLS.push(products[i]);
      localStorage.setItem("itemsToLS", JSON.stringify(cartItemsLS) || "");
      //console.log(products[i]);
      console.log(cartItemsLS);
      
      let cartItems = cartItemsLS.map((itemInCart) => {
        return new ShoppingCartItem(itemInCart.quantity, itemInCart.cartItem);
        
      }); 
      return cartItemsLS;
      //createHTMLCartpage(cartItemsLS); BUG*/

      addToCart(products[i]);
      //getLocalStorage();
      createHTMLCartpage(cart);
      let count: HTMLButtonElement = document.getElementById(
        "basketCount"
      ) as HTMLButtonElement;
      count.innerHTML = "" + cart.length;
      //createHTMLCartpage(cart);
    });

    //Eventlistener for btn that takes you to product details
    productInfoBtn.value = products[i].articleNumber;
    productInfoBtn.addEventListener("click", () => {
      let currentItem = Object.keys(products[i]);
      console.log(currentItem);
      //selectedItem = products[i];
      //createHTMLExtendedProductInfo(selectedItem);
      //set item i LS, json.stringify products[i];
      //location href --> inforbtn.href
      localStorage.setItem("product", JSON.stringify(products[i]) || "");
      location.href = anchorProductInfo.href;
      //window.location.replace("/pages/productdetailspage.html");
    });

    productInfoBtn.onclick = function (event: MouseEvent) {
      if (productInfoBtn.id === products[i].articleNumber) {
        createHTMLExtendedProductInfo(products[i]);
      }
    };

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
    productInfoBtn.innerHTML = "Mer Info";

    //Adds elements to page
    let flexContainer = document.querySelector(
      ".flexContainer"
    ) as HTMLDivElement;

    flexContainer.appendChild(itemContainer);
    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemDesc);
    itemContainer.appendChild(itemArticleNumber);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(itemSize);
    itemContainer.appendChild(addBtn);
    itemContainer.appendChild(anchorProductInfo);
    anchorProductInfo.appendChild(productInfoBtn);
  }
  console.log("createHTMLProductlist has been run");
}

createHTMLProductlist(products);
createHTMLCartpage(cart);

let purchaseBtn = document.createElement("button") as HTMLButtonElement;
purchaseBtn.classList.add("purchaseBtn");
purchaseBtn.innerHTML = "Till betalning";
let cartBody = document.querySelector(".offcanvas-body") as HTMLDivElement;
cartBody.appendChild(purchaseBtn);

purchaseBtn.addEventListener("click", () => {
  window.location.replace("/pages/checkoutpage.html");
});
/*
let sortDesc: HTMLButtonElement = document.getElementById("sort-desc") as HTMLButtonElement;
sortDesc.addEventListener("click", () => {
  
  let sortListToDesc = sortList(products);
  createHTMLProductlist(sortListToDesc);
}); */
/*
sortDesc.addEventListener("click", () => {
  products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1); // Sorts items from size large to small
  console.log(products);
});*/
/*
function sortList (products: Item[]) {
  let sortedDesc = products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1); // Sorts items from size large to small
  console.log("sortlist function has been run");
  return sortedDesc;
  
}*/

let sortDesc: HTMLDivElement = document.querySelector(
  ".sortLToS"
) as HTMLDivElement;
/*sortDesc.addEventListener("click", () => {
  let sortedDesc = products.sort((a: Item, b: Item) => {
    let sizeValueOne: number = a.sizeValue;
    let sizeValueTwo: number = b.sizeValue;
    if(sizeValueOne > sizeValueTwo) {
      return -1;
    }

  
    createHTMLProductlist(sortedDesc);
  }); 
  createHTMLProductlist(sortedDesc);
  console.log(sortedDesc);
  });*/

//createHTMLProductlist(sortedDesc);
/*
sortDesc.onclick = function () {
  let sortedItemsDesc = products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1);
  

  
  return createHTMLProductlist(sortedItemsDesc);
};*/
