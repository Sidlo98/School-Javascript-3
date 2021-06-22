export class ShoppingItem {
  // readonly item: string;
  // public amount: number;

  // constructor(i: string, a: number) {
  //   this.item = i
  //   this.amount = a
  // }

  constructor(
    private item: string, 
    public amount: number
  ) {}

  add() {
    this.amount ++
  }

  sub() {
    this.amount --
  }

  print() {
    this.item = this.item[0].toUpperCase() + this.item.slice(1)
    return `${this.item} x ${this.amount}`
  }

}