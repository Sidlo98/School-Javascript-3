import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app.state';
import { CartProduct } from 'src/app/store/models/cartProduct.model';
import { CartService } from 'src/app/store/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public shoppingCart: CartProduct[] = [];
  public cartTotal: number = 0;

  constructor(
    private store: Store<AppState>,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.cart)
      .subscribe((res) => (this.shoppingCart = res));

    this.store
      .select((state) => state.cartTotal)
      .subscribe((res) => (this.cartTotal = res));
  }

  decrement(item: CartProduct) {
    this.cartService.decrement(item);
  }
  increment(item: CartProduct) {
    this.cartService.increment(item);
  }
  deleteFromCart(id?: string) {
    if (id) {
      this.cartService.remove(id);
    }
  }
}
