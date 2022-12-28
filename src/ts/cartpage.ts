import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { cart } from "./functions";

//let cart: ShoppingCartItem[] = [];
//localStorage.setItem("itemsToLS", JSON.stringify(cart) || "[]");
//console.log(products);
//let cart: ShoppingCart[] = [];

//localStorage.getItem("itemsToLS", JSON.)
//cart = JSON.parse(localStorage.getItem("itemsToLS") || "[]");
//console.log(cart);
/*
let cartItems = cart.map((painting) => {
    return new ShoppingCartItem(painting.quantity, painting.cartItem);
    console.log(painting);
});*/

export function createHTMLCartpage(cart:ShoppingCartItem[]){
  let cartContainer = document.querySelector(".offcanvas-body")as HTMLDivElement;
  cartContainer.innerHTML="";
  for(let i=0;i<cart.length;i++){
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

createHTMLCartpage(cart);









//let cart = new ShoppingCart (0, []);

/*

export function addToCart(quantity: number, cartItem: Item) {

    if (Object.keys(cart()).length === 0) {
        let shoppingCartObject = new ShoppingCart(quantity, cartItem);
        let shoppingCartItems: ShoppingCart[] = [shoppingCartObject];
        localStorage.setItem("itemsToLS", JSON.stringify(shoppingCartItems) || "[]");
    } else {
        let currentCartItems: ShoppingCart[] = getCartItemsLS();
        let currentCartItem: ShoppingCart = getCurrentCurrentCartItem(currentCartItems, cartItem);
    }

  //let r = cart.itemList.push(product);

  //console.log(r);

}*/
/*
export function getCartItemsLS(): ShoppingCart[] {
    let cartItems: ShoppingCart[] = [];
    let cart: string = localStorage.getItem("itemsToLS") || "[]";
    let cartItemsObjects = JSON.parse(cart);
}*/
/*
let cart: ShoppingCart[] = [];
/*let retrievedItemsFromLS = localStorage.getItem("itemsToLS");
JSON.parse(localStorage.getItem("itemsToLS") || "[{}]");
console.log(retrievedItemsFromLS);
JSON.stringify(retrievedItemsFromLS);*/
/*
export function retrieveCartItemsFromLS(): ShoppingCart[] {
  cart = JSON.parse(localStorage.getItem("itemsToLS") || "{}");
  let cartItems = cart.map((products)) => {
    return new ShoppingCart()
  }
}*/

/*
if (typeof retrievedItemsFromLS === "string") {
  const paintings = JSON.parse(retrievedItemsFromLS);
  JSON.parse(localStorage.getItem("itemsToLS") || "{}");
  console.log(paintings);
 
  
}
*/







//let cart: ShoppingCart[] = [];