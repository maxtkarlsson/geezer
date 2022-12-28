import { Item } from "./item";
import { products } from "./itemArray";


export class ShoppingCartItem {
  constructor(public quantity: number, public cartItem: Item) {
    this.quantity = quantity;
  }
  
}

/*
export class ShoppingCart {
  quantity: Number;
  cartItem: Item;
  constructor(quantity: Number, cartItem:Item) {
    this.quantity = quantity;
    this.cartItem = cartItem;
  }
}*/


/*

export class ShoppingCart {

  quantity: Number;

  cartItem: Item;

  constructor(quantity: Number, cartItem:Item) {

    this.quantity = quantity;

    this.cartItem = cartItem;

  }

}*/