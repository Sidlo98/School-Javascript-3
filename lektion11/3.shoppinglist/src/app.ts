import { ShoppingItem } from './ShoppingItem.js';
import { Items } from './Items.js';
import { Template } from './Template.js';

const item = document.querySelector('#item') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const form = document.querySelector('#form') as HTMLFormElement;
const ul = document.querySelector('#output') as HTMLUListElement;

export const items = new Items([]);
const list = new Template(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  if(item.value.trim() !== '' && amount.valueAsNumber > 0 ) {
    const i: ShoppingItem = new ShoppingItem(item.value, amount.valueAsNumber);
    items.list.push(i);
    list.render(i);
    form.reset();
    item.focus();
  };
});