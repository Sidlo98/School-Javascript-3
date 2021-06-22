var Items = /** @class */ (function () {
    function Items(list) {
        this.list = list;
    }
    Items.prototype.delete = function (item) {
        this.list.splice(this.list.indexOf(item), 1);
    };
    return Items;
}());
export { Items };
