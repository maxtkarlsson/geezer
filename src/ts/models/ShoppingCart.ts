import { Item } from "./item";

class ShoppingCart {
  quantity: Number;
  itemList: Item[];
  constructor(quantity: Number, itemList: Item[]) {
    this.quantity = quantity;
    this.itemList = itemList;
  }
}
