import { Item } from "./item";
import { products } from "./itemArray";


export class ShoppingCart {
  constructor(public quantity: number, public cartItem: Item) {
    this.quantity = quantity;
    this.cartItem = cartItem;
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