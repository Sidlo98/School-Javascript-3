import { ShoppingItem } from './ShoppingItem.js';
import { Items } from './Items.js';
import { Template } from './Template.js';
var item = document.querySelector('#item');
var amount = document.querySelector('#amount');
var form = document.querySelector('#form');
var ul = document.querySelector('#output');
export var items = new Items([]);
var list = new Template(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (item.value.trim() !== '' && amount.valueAsNumber > 0) {
        var i = new ShoppingItem(item.value, amount.valueAsNumber);
        items.list.push(i);
        list.render(i);
        form.reset();
        item.focus();
    }
    ;
});
