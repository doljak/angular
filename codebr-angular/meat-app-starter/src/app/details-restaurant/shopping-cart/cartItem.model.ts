import { MenuItem } from "../menu-item/menu-item.model";

export class CartItem{
  constructor(
    public cartItem:MenuItem,
    public quantity: number = 1
  ){}

  value():number{
    return this.cartItem.price * this.quantity
  }
}