import { Item } from "./item";


export class ShoppingCartItem {
  constructor(public quantity: number, public cartItem: Item) {
    this.quantity = quantity;
  }
  
}
