var ShoppingItem = /** @class */ (function () {
    // readonly item: string;
    // public amount: number;
    // constructor(i: string, a: number) {
    //   this.item = i
    //   this.amount = a
    // }
    function ShoppingItem(item, amount) {
        this.item = item;
        this.amount = amount;
    }
    ShoppingItem.prototype.add = function () {
        this.amount++;
    };
    ShoppingItem.prototype.sub = function () {
        this.amount--;
    };
    ShoppingItem.prototype.print = function () {
        this.item = this.item[0].toUpperCase() + this.item.slice(1);
        return this.item + " x " + this.amount;
    };
    return ShoppingItem;
}());
export { ShoppingItem };
