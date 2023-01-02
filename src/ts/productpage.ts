//import { createHTMLCartpage } from "./cartpage";
import { getLocalStorage } from "./functions";
import { Item } from "./models/item";
import { products } from "./models/itemArray";
import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { createHTMLCartpage } from "./functions";
import { createHTMLExtendedProductInfo } from "./productdetailspage";

getLocalStorage();

//let cartFromLS: ShoppingCartItem[] = [];

//När vi pushar saker i listan
//variabler i oliak filer som heter samma namn
//Flytta addtocart till product page, ha samma listor men de ska bara vara globala för en sida.

//Vi måste ha en lista i denna funktionen, annars uppdateras den även om man rensrar lokalstolslddl
export function addToCart(product: Item) {
  let cart: ShoppingCartItem[] = []; //Samla sådana object i den listan
  //Plockar från localstorage:
  cart = getLocalStorage();

  //Skapar ett shoppingCartItem med produkten vi klickat på.
  let newCartItem: ShoppingCartItem = new ShoppingCartItem(1, product);

  //Kollar om artikelnr redan finns i vår cart
  const containsProduct = cart.some((cart) => {
    return cart.cartItem.articleNumber == product.articleNumber;
  });

  //loggar ut antingen true(produkten finns i cart) eller false(finns inte)
  console.log(containsProduct);

  //Måste ändra denna funktion?
  if (containsProduct === true) {
    for (let i = 0; i < cart.length; i++) {
      if (newCartItem.cartItem.articleNumber === cart[i].cartItem.articleNumber)
        cart[i].quantity = cart[i].quantity + 1;
    }
  } else {
    cart.push(newCartItem);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

function createHTMLProductlist(products: Item[]) {
  let cart: ShoppingCartItem[] = getLocalStorage();

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
      addToCart(products[i]);
      //getLocalStorage();
      
      let count: HTMLButtonElement = document.getElementById(
        "basketCount"
      ) as HTMLButtonElement;
      count.innerHTML = "" + cart.length;
      createHTMLCartpage();
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
    itemImg.src = products[i].imageUrlLarge;
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
  console.log("createHTMLProductlist has been run" + JSON.stringify(products));
}

createHTMLProductlist(products);
createHTMLCartpage();

/*
let purchaseBtn = document.createElement("button") as HTMLButtonElement;
purchaseBtn.classList.add("purchaseBtn");
purchaseBtn.innerHTML = "Till betalning";
let cartBody = document.querySelector(".offcanvas-body") as HTMLDivElement;
cartBody.appendChild(purchaseBtn);

purchaseBtn.addEventListener("click", () => {
  window.location.replace("/pages/checkoutpage.html");
});
*/






let sortContainer: HTMLDivElement = (document.querySelector(".sort") as HTMLDivElement);
let sortDesc: HTMLButtonElement = document.querySelector(
  "#sort-desc"
) as HTMLButtonElement;
sortDesc.innerHTML = "Sortera L - S";

sortContainer.appendChild(sortDesc);


sortDesc.addEventListener("click", () => {
  let flexContainer = document.querySelector(
    ".flexContainer"
  ) as HTMLDivElement;
  flexContainer.innerHTML = "";
  
  let sortedItemsDesc = products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1);

  createHTMLProductlist(sortedItemsDesc);
  //return sortedItemsDesc;
  console.log(sortedItemsDesc);
  sortDescending();
  return createHTMLProductlist(sortedItemsDesc);
  //console.error(sortedItemsDesc);
  
  
});


/*
function sortDescending(products: Item[]) {
  let sortedItemsDesc = products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1);
  //return sortedItemsDesc;
  
  console.log(sortedItemsDesc);


};*/

export function sortDescending () {

  let sortedItemsDesc: Item[] = products.sort((a: Item, b: Item) => (a.sizeValue > b.sizeValue) ? -1 : 1);
  return sortedItemsDesc;



};