import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { Item } from "./models/item";
import { products } from "./models/itemArray";
//age";

let cartFromLS: ShoppingCartItem[] = [];

function removeItem(product: ShoppingCartItem) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].cartItem.articleNumber === product.cartItem.articleNumber) {
      cart.splice(i, 1);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("Function removeItem run.");
}

export function getLocalStorage(): ShoppingCartItem[] {
  let cart: ShoppingCartItem[] = [];

  cartFromLS = JSON.parse(localStorage.getItem("cart") || "[]");
  //Map
  cart = cartFromLS.map((item) => {
    return new ShoppingCartItem(item.quantity, item.cartItem);
  });
  return cart;
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
    let increaseBtn = document.createElement("button") as HTMLButtonElement;
    let decreaseBtn = document.createElement("button") as HTMLButtonElement;

    //Adds classes to the elements:
    itemContainer.classList.add("itemCard--small");
    itemImg.classList.add("itemCard__image--small");
    itemTitle.classList.add("itemCard__title--small");
    itemPrice.classList.add("itemCard__price--small");
    itemQuantity.classList.add("itemCard__quantity--small");
    increaseBtn.classList.add("itemCard__increaseBtn");
    decreaseBtn.classList.add("itemCard__decreaseBtn");

    //Adds eventlistener to buttons
    increaseBtn.addEventListener("click", () => {});
    decreaseBtn.addEventListener("click", () => {
      console.log("decreaseBtn clicked.");
      cart[i].quantity--;

      if (cart[i].quantity < 1) {
        cart[i].quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(cart) || "[]");

      //decreaseQuantity(cart[i]);
      //getLocalStorage(); //setta local
      createHTMLCartpage(cart);
    });

    //Adds content to the elements
    itemImg.src = cart[i].cartItem.imageUrl;
    itemImg.alt = "";
    itemTitle.innerText = cart[i].cartItem.title;
    itemPrice.innerText = cart[i].cartItem.price.toString() + " kr";
    itemQuantity.innerText = "Antal: " + cart[i].quantity.toString();
    increaseBtn.innerText = "+";
    decreaseBtn.innerText = "-";

    //Adds elements to page
    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(itemQuantity);
    itemContainer.appendChild(decreaseBtn);
    itemContainer.appendChild(increaseBtn);
    cartContainer.appendChild(itemContainer);
  }
}
