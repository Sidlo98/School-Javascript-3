import { items } from './app.js';
var Template = /** @class */ (function () {
    function Template(container) {
        this.container = container;
    }
    Template.prototype.render = function (item) {
        var li = document.createElement('li');
        li.className = 'p-2 bg-light d-flex justify-content-between align-items-center mb-2 rounded';
        var h4 = document.createElement('h4');
        h4.innerText = item.print();
        var buttons = document.createElement('div');
        var plusBtn = document.createElement('button');
        plusBtn.className = 'btn fixed btn-dark btn-sm ms-1';
        plusBtn.innerText = '+';
        plusBtn.addEventListener('click', function () {
            item.add();
            h4.innerText = item.print();
        });
        var minusBtn = document.createElement('button');
        minusBtn.className = 'btn fixed btn-dark btn-sm ms-1';
        minusBtn.innerText = '-';
        minusBtn.addEventListener('click', function () {
            if (item.amount <= 1) {
                li.remove();
                items.delete(item);
            }
            else {
                item.sub();
                h4.innerText = item.print();
            }
        });
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn fixed btn-danger btn-sm ms-1';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', function () {
            li.remove();
            items.delete(item);
        });
        buttons.append(plusBtn, minusBtn, deleteBtn);
        li.append(h4, buttons);
        this.container.append(li);
    };
    return Template;
}());
export { Template };
