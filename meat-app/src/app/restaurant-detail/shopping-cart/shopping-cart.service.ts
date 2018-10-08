import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService{

    items:CartItem[] = []

    cleanCart()
    {
        return this.items = []
    }

    getItem(item:MenuItem)
    {
        let foundItem = this.items.find(mItem => item.id === mItem.menuItem.id)

        if(foundItem)
        {
            foundItem.quantity = foundItem.quantity + 1
        }
        else
        {
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item:CartItem)
    {
        this.items.splice(this.items.indexOf(item), 1)
    }

    setTotalValue(): number 
    {
        return this.items
            .map(item => item.getValue())
            .reduce((prev, value) => prev + value, 0)
    }
}