import { ShoppingItem } from './ShoppingItem.js';
export class Items {
  constructor(public list: ShoppingItem[]) {}

  delete(item: ShoppingItem) {
    this.list.splice(this.list.indexOf(item), 1)
  }
}