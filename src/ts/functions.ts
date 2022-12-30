import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { Item } from "./models/item";
import { products } from "./models/itemArray";

export let cart: ShoppingCartItem[] = []; //Samla sådana object i den listan
export let cartFromLS: ShoppingCartItem[] = [];

export function addToCart(product: Item) {
  //Skapar ett shoppingCartItem med produkten vi klickat på.
  let newCartItem: ShoppingCartItem = new ShoppingCartItem(1, product);

  //Kollar om artikelnr redan finns i vår cart
  const containsProduct = cart.some((cart) => {
    return cart.cartItem.articleNumber == product.articleNumber;
  });

  //loggar ut antingen true(produkten finns i cart) eller false(finns inte)
  console.log(containsProduct);

  if (containsProduct === true) {
    for (let i = 0; i < cart.length; i++) {
      if (newCartItem.cartItem.articleNumber === cart[i].cartItem.articleNumber)
        cart[i].quantity = cart[i].quantity + 1;
    }
  } else {
    cart.push(newCartItem);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  getLocalStorage();
  console.log(cart);
}

function decreaseQuantity(product: Item) {
  for (let i = 0; i < cart.length; i++) {
    if (
      cart[i].cartItem.articleNumber === product.articleNumber &&
      cart[i].quantity > 1
    ) {
      cart[i].quantity = cart[i].quantity - 1;
    } else {
      removeItem(product);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  getLocalStorage();
}

function removeItem(product: Item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].cartItem.articleNumber === product.articleNumber) {
      cart.splice(i, 1);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  getLocalStorage();
}

export function getLocalStorage() {
  cartFromLS = JSON.parse(localStorage.getItem("cart") || "[]");
  //Map
  cart = cartFromLS.map((item) => {
    return new ShoppingCartItem(item.quantity, item.cartItem);
  });
  console.log(cart);
}

export function createHTMLCartpage(cart: ShoppingCartItem[]) {
  let cartContainer = document.querySelector(
    ".offcanvas-body"
  ) as HTMLDivElement;
  cartContainer.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
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
    itemImg.src = cart[i].cartItem.imageUrl;
    itemImg.alt = "";
    itemTitle.innerText = cart[i].cartItem.title;
    itemPrice.innerText = cart[i].cartItem.price.toString() + " kr";
    itemQuantity.innerText = "Antal: " + cart[i].cartItem.quantity.toString();

    //Adds elements to page
    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(itemQuantity);
    cartContainer.appendChild(itemContainer);
  }
}

/*
  export function createHTMLExtendedProductInfo(product: Item) {
    let selectedItem: Item = new Item(products[i].articleNumber,products[i].title,products[i].imageUrl, products[i].imageUrlLarge, products[i].desc,products[i].descLong, products[i].price, products[i].size, products[i].sizeValue, products[i].infoBtn,products[i].addBtn, products[i].quantity);

  
  }*/
