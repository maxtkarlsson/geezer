import { getLocalStorage, totalCount } from "./functions";
import { Item } from "./models/item";
import { products } from "./models/itemArray";
import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { createHTMLCartpage } from "./functions";


getLocalStorage();
totalCount();

export function addToCart(product: Item) {
  let cart: ShoppingCartItem[] = []; //Collect objects in array
  //Gets from localstorage
  cart = getLocalStorage();

  //Sets a new shoppingcart-item for the chosen clicked product
  let newCartItem: ShoppingCartItem = new ShoppingCartItem(1, product);

  //Checks if the articlenumber already exists in our cart
  const containsProduct = cart.some((cart) => {
    return cart.cartItem.articleNumber == product.articleNumber;
  });

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
      addToCart(products[i]);
      totalCount(); 
    });

    //Adds attributes to the elements 
    itemImg.src = products[i].imageUrlLarge;
    itemImg.alt = "";
    itemTitle.innerText = products[i].title;
    itemDesc.innerText = products[i].desc;
    itemPrice.innerText = products[i].price.toString() + " kr";
    itemArticleNumber.innerText =
      "Artikel nummer: " + products[i].articleNumber;
    itemSize.innerText = "Storlek: " + products[i].size;
    addBtn.innerHTML = "Köp";


    //Sets the elements to the DOM
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
    itemContainer.appendChild(addBtn);
   
  }
  
}

//Displays the products in the DOM and createHTMLCartpage displays the added procucts in our cart

createHTMLProductlist(products);
createHTMLCartpage();

//DOM-elements and their attributes for the sort-section

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

//Defines the chosen string-value that the sort-function down below depends on
let selectedSize: string = "";

//AddEventListener for each button with individual sorting-value

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

//Sort-function for the products, i.e. paintings. A filtered array based on the string-value for the size-keys

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

//Displays the user's chosen size-value in DOM

function displaySelectedSize(filtered: Item[]) {
  let flexContainer = document.querySelector(
    ".flexContainer"
  ) as HTMLDivElement;
  flexContainer.innerHTML = "";

  for (let i = 0; i < filtered.length; i++) {
    //Creates the HTML elements we need in our DOM:
    let itemContainer = document.createElement("div") as HTMLDivElement;
    let itemImg = document.createElement("img") as HTMLImageElement;
    let itemTitle = document.createElement("h1") as HTMLHeadingElement;
    let itemDesc = document.createElement("p") as HTMLParagraphElement;
    let itemArticleNumber = document.createElement("p") as HTMLParagraphElement;
    let itemSize = document.createElement("p") as HTMLParagraphElement;
    let itemPrice = document.createElement("p") as HTMLParagraphElement;
    let addBtn = document.createElement("button") as HTMLButtonElement;
   
    //Adds classes to the DOM-elements
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
      totalCount();
    });

    //Adds content and atrributes to the DOM-elements
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
