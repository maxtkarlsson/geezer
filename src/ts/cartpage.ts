import { Item } from "./models/item";
import { products } from "./models/itemArray";
import { ShoppingCart } from "./models/ShoppingCart";

let cartItemsLS: ShoppingCart[] = [];
//localStorage.setItem("itemsToLS", JSON.stringify(cartItemsLS) || "[]");
//console.log(products);
//let cartItemsLS: ShoppingCart[] = [];

//localStorage.getItem("itemsToLS", JSON.)
cartItemsLS = JSON.parse(localStorage.getItem("itemsToLS") || "[]");
console.log(cartItemsLS);

let cartItems = cartItemsLS.map((painting) => {
    return new ShoppingCart(painting.quantity, painting.cartItem);
    console.log(painting);
});

export function createHTMLCartpage(cartItemsLS:ShoppingCart[]){
  let cartContainer = document.querySelector(".offcanvas-body")as HTMLDivElement;
  cartContainer.innerHTML="";
  for(let i=0;i<cartItemsLS.length;i++){
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
      itemImg.src = cartItemsLS[i].cartItem.imageUrl;
      itemImg.alt = "";
      itemTitle.innerText = cartItemsLS[i].cartItem.title;
      itemPrice.innerText = cartItemsLS[i].cartItem.price.toString() + " kr";
      itemQuantity.innerText = "Antal: " + cartItemsLS[i].cartItem.quantity.toString();

      //Adds elements to page
      itemContainer.appendChild(itemImg);
      itemContainer.appendChild(itemTitle);
      itemContainer.appendChild(itemPrice);
      itemContainer.appendChild(itemQuantity);
      cartContainer.appendChild(itemContainer);

  }
}

createHTMLCartpage(cartItemsLS);
//let cart = new ShoppingCart (0, []);

/*

export function addToCart(quantity: number, cartItem: Item) {

    if (Object.keys(cartItemsLS()).length === 0) {
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
    let cartItemsLS: string = localStorage.getItem("itemsToLS") || "[]";
    let cartItemsObjects = JSON.parse(cartItemsLS);
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
  let cartItems = cartItemsLS.map((products)) => {
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







//let cartItemsLS: ShoppingCart[] = [];