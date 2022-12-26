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