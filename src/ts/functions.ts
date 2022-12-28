import { ShoppingCartItem } from "./models/ShoppingCartItem";
import { Item } from "./models/item";


export let cart: ShoppingCartItem[] = []; //Samla sådana object i den listan
export let cartFromLS: ShoppingCartItem[] = [];


export function addToCart(product: Item) {
    //Skapar ett shoppingCartItem med produkten vi klickat på.
    let cartItem: ShoppingCartItem = new ShoppingCartItem(1, product);
    //Pushar till carten och sätter den i LS
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  
  }

  export function getLocalStorage() {
    cartFromLS = JSON.parse(localStorage.getItem("cart") || "[]");
    //Map
    cart = cartFromLS.map((item) => {
        return new ShoppingCartItem(item.quantity, item.cartItem);
    });
    console.log(cart);
  
  }
  
  