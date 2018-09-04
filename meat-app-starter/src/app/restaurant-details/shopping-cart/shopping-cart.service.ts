import { MenuItem } from '../menu-item/menu-item.module';
import { CartItem } from './cart-item.model';

class ShoppingCartService {
  items: CartItem[];

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id);

    foundItem
      ? (foundItem.quantity = foundItem.quantity + 1)
      : this.items.push(new CartItem(item));
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, next) => prev + next, 0);
  }
}

export { ShoppingCartService };
