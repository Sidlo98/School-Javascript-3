import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.model';

export const addProduct = createAction(
  '[productCatalog] ADD_PRODUCT',
  props<{ product: IProduct }>()
);
export const removeProduct = createAction(
  '[productCatalog] REMOVE_PRODUCT',
  props<{ id: string }>()
);
export const increment = createAction(
  '[productCatalog] INCREMENT_PRODUCT_QUANTITY',
  props<{ product: IProduct }>()
);
export const decrement = createAction(
  '[productCatalog] DECREMENT_PRODUCT_QUANTITY',
  props<{ product: IProduct }>()
);
