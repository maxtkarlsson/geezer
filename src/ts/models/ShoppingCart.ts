import { Item } from "./item";
import { products } from "./itemArray";


export class ShoppingCart {
  quantity: Number;
  itemList: Item[];
  constructor(quantity: Number, itemList: Item[]) {
    this.quantity = quantity;
    this.itemList = itemList;
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


