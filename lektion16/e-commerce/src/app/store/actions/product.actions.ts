import { ActionTypes } from '../actiontypes';
import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const getProduct = createAction(
  ActionTypes.getProduct,
  props<{ payload: string }>()
);
export const getProductSuccess = createAction(
  ActionTypes.getProductSuccess,
  props<{ payload: Product }>()
);
export const getProductFailure = createAction(
  ActionTypes.getProductFailure,
  props<{ payload: Error }>()
);
export const clearProduct = createAction(ActionTypes.clearProduct);
