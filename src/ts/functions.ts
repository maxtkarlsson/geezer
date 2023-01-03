import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { Item } from "./models/item";
import { products } from "./models/itemArray";
//age";

//let cartFromLS: ShoppingCartItem[] = [];

function removeItem(product: ShoppingCartItem) {
  let cart: ShoppingCartItem[] = getLocalStorage();
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

  let cartFromLS: ShoppingCartItem[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
  //Map
  cart = cartFromLS.map((item) => {
    return new ShoppingCartItem(item.quantity, item.cartItem);
  });
  return cart;
}

export function createHTMLCartpage() {
  let cart: ShoppingCartItem[] = getLocalStorage();
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
    let deleteBtn = document.createElement("button") as HTMLButtonElement;
/*
    let purchaseBtn = document.createElement("button") as HTMLButtonElement; /////
    let cartBody = document.querySelector(".offcanvas-body") as HTMLDivElement;///////

*/

    //Adds classes to the elements:
    itemContainer.classList.add("itemCard--small");
    itemImg.classList.add("itemCard__image--small");
    itemTitle.classList.add("itemCard__title--small");
    itemPrice.classList.add("itemCard__price--small");
    itemQuantity.classList.add("itemCard__quantity--small");
    increaseBtn.classList.add("itemCard__increaseBtn");
    decreaseBtn.classList.add("itemCard__decreaseBtn");
    deleteBtn.classList.add("itemCard__deleteBtn");
    //purchaseBtn.classList.add("purchaseBtn"); //////

    //Adds eventlistener to buttons
    increaseBtn.addEventListener("click", () => {
      cart[i].quantity++;
      localStorage.setItem("cart", JSON.stringify(cart) || "[]");
      createHTMLCartpage();
      totalCount(); //////////Test för totalCount
    });

    decreaseBtn.addEventListener("click", () => {
      console.log("decreaseBtn clicked.");
      cart[i].quantity--;

      if (cart[i].quantity < 1) {
        cart[i].quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(cart) || "[]");
      totalCount();

      //decreaseQuantity(cart[i]);
      //getLocalStorage(); //setta local
      createHTMLCartpage();
    });

    deleteBtn.addEventListener("click", () => {
      removeItem(cart[i]);
      createHTMLCartpage();
      totalCount();
    });

   /* purchaseBtn.addEventListener("click", () => {
      window.location.replace("/pages/checkoutpage.html");
    });*/

    //Adds content to the elements
    itemImg.src = cart[i].cartItem.imageUrl;
    itemImg.alt = "";
    itemTitle.innerText = cart[i].cartItem.title;
    itemPrice.innerText = cart[i].cartItem.price.toString() + " kr";
    itemQuantity.innerText = "Antal: " + cart[i].quantity.toString();
    increaseBtn.innerText = "+";
    decreaseBtn.innerText = "-";
    deleteBtn.innerText = "X";
   // purchaseBtn.innerHTML = "Till betalning"; /////

    //Adds elements to page
    itemContainer.appendChild(itemImg);
    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemPrice);
    itemContainer.appendChild(itemQuantity);
    itemContainer.appendChild(decreaseBtn);
    itemContainer.appendChild(increaseBtn);
    itemContainer.appendChild(deleteBtn);
    cartContainer.appendChild(itemContainer);
   // cartBody.appendChild(purchaseBtn); ///////
  }
  sumCart(); ///////////////////Ska denna verkligen vara här?? Tar inte ändringar om flera i quntity eller delete i cart
  createPurchaseBtn();
}

export function sumCart (){
  let totalSum:number = 0;
  let cart: ShoppingCartItem[] = getLocalStorage();
  console.log("sumcart has been run");
  
  let cartSum = document.createElement("p")as HTMLParagraphElement;
  let cartBody = document.querySelector(".offcanvas-body") as HTMLDivElement;
  for (let i=0;i<cart.length;i++){
    totalSum += cart[i].cartItem.price * cart[i].quantity;
    cartSum.innerHTML = "Totalt:" + totalSum.toString() + "kr";
    cartBody.appendChild(cartSum);
    localStorage.setItem("cart", JSON.stringify(cart) || "[]");
    
  }
  //return sumCart;
  console.log(totalSum);
}

function createPurchaseBtn () {
  let purchaseBtn = document.createElement("button") as HTMLButtonElement;
  purchaseBtn.classList.add("purchaseBtn");
  purchaseBtn.innerHTML = "Till betalning";
  let cartBody = document.querySelector(".offcanvas-body") as HTMLDivElement;
  cartBody.appendChild(purchaseBtn);

  purchaseBtn.addEventListener("click", () => {
    window.location.replace("/pages/checkoutpage.html");
  });
}

export function totalCount () {
  let count: HTMLButtonElement = document.getElementById(
    "basketCount"
  ) as HTMLButtonElement;
  let cart: ShoppingCartItem[] = getLocalStorage();
  let totalQuantity:number=0;
  for(let i=0;i<cart.length;i++) {
    totalQuantity += cart[i].quantity;
  }
  count.innerHTML = "" + totalQuantity;
  createHTMLCartpage();
  console.log(totalQuantity);
  localStorage.setItem("cart", JSON.stringify(cart) || "[]");
  return totalQuantity;

  //createHTMLCartpage(cart);
  
}




