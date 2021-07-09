import { ActionTypes } from '../actiontypes';
import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const getProducts = createAction(ActionTypes.getProducts);

export const getProductsSuccess = createAction(
  ActionTypes.getProductsSuccess,
  props<{ payload: Product[] }>()
);

export const getProductsFailure = createAction(
  ActionTypes.getProductsFailure,
  props<{ payload: Error }>()
);
