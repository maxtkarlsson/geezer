import { Item } from "./item";
import { products } from "./itemArray";


export class ShoppingCartItem {
  constructor(public quantity: number, public cartItem: Item) {
    this.quantity = quantity;
  }
  
}
