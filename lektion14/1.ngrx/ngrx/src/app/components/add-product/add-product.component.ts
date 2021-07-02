import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/models/app.state';
import { IProduct } from 'src/app/models/product.model';
import { addProduct } from 'src/app/store/actions/productCatalog.actions';
// import {v4 as uuid } from 'uuid'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public product: IProduct = { name: '', price: 0, quantity: 0 };

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {}

  addCartItem() {
    this.product.id = Date.now().toString();
    this.store.dispatch(addProduct({ product: this.product }));
    this.product = {
      id: '',
      name: '',
      price: 0,
      quantity: 1,
    };
  }
}
