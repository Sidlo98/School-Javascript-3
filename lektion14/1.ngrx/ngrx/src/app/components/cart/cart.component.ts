import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/models/app.state';
import { IProduct } from 'src/app/models/product.model';
import {
  decrement,
  increment,
  removeProduct,
} from 'src/app/store/actions/productCatalog.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products$: Observable<IProduct[]> | undefined;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.products$ = this.store.select('cart');
  }

  deleteCartItem(id?: string) {
    if (id) {
      this.store.dispatch(removeProduct({ id }));
    }
  }

  increment(item: IProduct) {
    this.store.dispatch(increment({ product: item }));
  }

  decrement(item: IProduct) {
    this.store.dispatch(decrement({ product: item }));
  }
}
