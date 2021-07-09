import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProducts } from 'src/app/store/actions/productCatalog.actions';
import { AppState } from 'src/app/store/models/app.state';
import { Product } from 'src/app/store/models/product.model';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css'],
})
export class ProductCatalogComponent implements OnInit {
  public productCatalog: Observable<Product[]> | undefined;
  public loading$: Observable<Boolean> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getProducts());

    this.productCatalog = this.store.select(
      (state) => state.productCatalog.productCatalog
    );
    this.loading$ = this.store.select((state) => state.productCatalog.loading);
  }
}
