import { CartItem } from './cartItem.model'
import { MenuItem } from '../menu-item/menu-item.model';

export class ShopppingCartService{

  items:CartItem[]

  constructor(){}

  clear(){
    this.items = []
  }

  addItem(item:MenuItem){
    const foundItem = this.items.filter(mItem => item.id === mItem.menuItem.id )

    if(foundItem){
      foundItem.quantity = foundItem.quantity + 1;
    }else{
      this.items.push(new CartItem(item));
    }

  }

  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item), 1)
  }

  total():number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev+value, 0)
  }

}