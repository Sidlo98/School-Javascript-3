import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../actions/cart.actions';
import { AppState } from '../models/app.state';
import { CartProduct } from '../models/cartProduct.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private store: Store<AppState>) {}

  private cart: CartProduct[] = [];

  cartTotal() {
    this.store
      .select((state) => state.cart)
      .subscribe((res) => (this.cart = res));
    let total = 0;
    this.cart.forEach((item) => {
      if (item.product.price) {
        total += item.product.price * item.quantity;
      }
    });
    this.store.dispatch(actions.cartTotal({ payload: total }));
  }

  cartAmount() {
    this.store
      .select((state) => state.cart)
      .subscribe((res) => (this.cart = res));
    let amount = 0;
    this.cart.forEach((item) => {
      if (item.product.price) {
        amount += item.quantity;
      }
    });
    this.store.dispatch(actions.cartAmount({ payload: amount }));
  }

  add(product: Product, quantity: number) {
    this.store
      .select((state) => state.cart)
      .subscribe((res) => (this.cart = res));

    let exists = this.cart.find((item) => item.product._id === product._id);

    if (!exists) {
      this.store.dispatch(
        actions.addToCart({ payload: { product, quantity } })
      );
      this.cartAmount();
      this.cartTotal();
    } else {
      this.increment({ product, quantity });
    }
  }

  remove(id: string) {
    this.store.dispatch(actions.removeFromCart({ payload: id }));
    this.cartAmount();
    this.cartTotal();
  }

  increment(item: CartProduct) {
    this.store.dispatch(actions.increment({ payload: item }));
    this.cartAmount();
    this.cartTotal();
  }

  decrement(item: CartProduct) {
    if (item.quantity <= 1 && item.product._id) {
      this.remove(item.product._id);
    } else {
      this.store.dispatch(actions.decrement({ payload: item }));
      this.cartAmount();
      this.cartTotal();
    }
  }
}
