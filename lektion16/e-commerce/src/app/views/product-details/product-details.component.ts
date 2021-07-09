import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  clearProduct,
  getProduct,
} from 'src/app/store/actions/product.actions';
import { AppState } from 'src/app/store/models/app.state';
import { Product } from 'src/app/store/models/product.model';
import { CartService } from 'src/app/store/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public product$: Product = {};
  public loading$: Observable<Boolean> | undefined;

  constructor(
    private store: Store<AppState>,
    private router: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      getProduct({ payload: this.router.snapshot.params.id })
    );

    this.store
      .select((state) => state.product.product)
      .subscribe((res) => (this.product$ = res));

    this.loading$ = this.store.select((state) => state.product.loading);
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearProduct());
  }

  addToCart(product: Product, quantity: number = 1) {
    this.cartService.add(product, quantity);
  }
}
