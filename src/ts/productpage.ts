//import { createHTMLCartpage } from "./cartpage";
import { getLocalStorage, totalCount } from "./functions";
import { Item } from "./models/item";
import { products } from "./models/itemArray";
import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { createHTMLCartpage } from "./functions";
import { createHTMLExtendedProductInfo } from "./productdetailspage";

getLocalStorage();
totalCount();
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
   // let productInfoBtn = document.createElement("button") as HTMLButtonElement;
    //let anchorProductInfo = document.createElement("a") as HTMLAnchorElement;
    //anchorProductInfo.href = "/src/pages/productdetailspage.html";

    //Adds classes to the elements
    itemContainer.classList.add("itemCard");
    itemImg.classList.add("itemCard__image");
    itemTitle.classList.add("itemCard__title");
    itemDesc.classList.add("itemCard__desc");
    itemArticleNumber.classList.add("itemCard__articleNumber");
    itemPrice.classList.add("itemCard__price");
    itemSize.classList.add("itemCard__size");
    addBtn.classList.add("itemCard__addBtn");
    //productInfoBtn.classList.add("itemCard__addBtn");

    //Eventlistener for adding to cart
    addBtn.addEventListener("click", () => {
      addToCart(products[i]);
      //getLocalStorage();
      
     /* let count: HTMLButtonElement = document.getElementById(
        "basketCount"
      ) as HTMLButtonElement;
      count.innerHTML = "" + cart.length;
      createHTMLCartpage();
      //createHTMLCartpage(cart);
      */
     totalCount(); //////////////Test för count
    });

    //Eventlistener for btn that takes you to product details
    //productInfoBtn.value = products[i].articleNumber;
    //productInfoBtn.addEventListener("click", () => {
     //let currentItem = Object.keys(products[i]);
     // console.log(currentItem);
      //selectedItem = products[i];
      //createHTMLExtendedProductInfo(selectedItem);
      //set item i LS, json.stringify products[i];
      //location href --> inforbtn.href
      //localStorage.setItem("product", JSON.stringify(products[i]) || "");
      //location.href = anchorProductInfo.href;
      //window.location.replace("/pages/productdetailspage.html");
    //});

    /*productInfoBtn.onclick = function (event: MouseEvent) {
      if (productInfoBtn.id === products[i].articleNumber) {
        createHTMLExtendedProductInfo(products[i]);
      }
    };
*/
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
   // productInfoBtn.innerHTML = "Mer Info";

    //Adds elements to page
    let flexContainer = document.querySelector(
      ".flexContainer"
    ) as HTMLDivElement;

    flexContainer.appendChild(itemContainer);
    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemDesc);
    itemContainer.appendChild(itemArticleNumber);
    itemContainer.appendChild(itemSize);
    itemContainer.appendChild(itemPrice);
    //itemContainer.appendChild(itemSize);
    itemContainer.appendChild(addBtn);
   // itemContainer.appendChild(anchorProductInfo);
    //anchorProductInfo.appendChild(productInfoBtn);
  }
  console.log("createHTMLProductlist has been run" + JSON.stringify(products));
}

createHTMLProductlist(products);
createHTMLCartpage();







let sortContainer: HTMLDivElement = (document.querySelector(".sort") as HTMLDivElement);
let sortS: HTMLButtonElement = document.querySelector("#small") as HTMLButtonElement;
let sortM: HTMLButtonElement = document.querySelector("#medium") as HTMLButtonElement;
let sortL: HTMLButtonElement = document.querySelector("#large") as HTMLButtonElement;
let sortAll: HTMLButtonElement = document.querySelector("#allitems") as HTMLButtonElement;
sortS.innerHTML = "S";
sortM.innerHTML = "M";
sortL.innerHTML = "L";
sortAll.innerHTML = "Alla tavlor";
sortContainer.appendChild(sortS);
sortContainer.appendChild(sortM);
sortContainer.appendChild(sortL);
sortContainer.appendChild(sortAll);

let selectedSize: string = "";

sortS.addEventListener("click", () => {
  selectedSize = "S";
  filterOptions(products);
});

sortM.addEventListener("click", () => {
  selectedSize = "M";
  filterOptions(products);
});

sortL.addEventListener("click", () => {
  selectedSize = "L";
  filterOptions(products);
});

sortAll.addEventListener("click", () => {
  selectedSize = "Alla tavlor";
  filterOptions(products);
});

function filterOptions(products: Item[]) {
  let filtered = products.filter((paintings) => {
    return paintings.size === selectedSize;
  });

  if (selectedSize === "Alla tavlor") {
    let flexContainer = document.querySelector(
    ".flexContainer"
  ) as HTMLDivElement;
  flexContainer.innerHTML = "";
    createHTMLProductlist(products);
  }
  else {
    displaySelectedSize(filtered);
  }
}

function displaySelectedSize(filtered: Item[]) {
  let flexContainer = document.querySelector(
    ".flexContainer"
  ) as HTMLDivElement;
  flexContainer.innerHTML = "";

  for (let i = 0; i < filtered.length; i++) {
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
      addToCart(filtered[i]);
      //getLocalStorage();
      
     /* let count: HTMLButtonElement = document.getElementById(
        "basketCount"
      ) as HTMLButtonElement;
      count.innerHTML = "" + cart.length;
      createHTMLCartpage();
      //createHTMLCartpage(cart);
      */
     totalCount(); //////////////Test för count
    });

    //Adds content to the elements
    itemImg.src = filtered[i].imageUrlLarge;
    itemImg.alt = "";
    itemTitle.innerText = filtered[i].title;
    itemDesc.innerText = filtered[i].desc;
    itemPrice.innerText = filtered[i].price.toString() + " kr";
    itemArticleNumber.innerText =
      "Artikel nummer: " + filtered[i].articleNumber;
    itemSize.innerText = "Storlek: " + filtered[i].size;
    addBtn.innerHTML = "Köp";

    flexContainer.appendChild(itemContainer);
    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemDesc);
    itemContainer.appendChild(itemArticleNumber);
    itemContainer.appendChild(itemSize);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(addBtn);


  }
}
