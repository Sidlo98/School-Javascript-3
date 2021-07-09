import { ProductState } from '../models/product.state';
import * as actions from '../actions/product.actions';
import { Action, createReducer, on } from '@ngrx/store';

const initState: ProductState = {
  product: {},
  loading: false,
  error: undefined,
};

const _productReducer = createReducer(
  initState,

  on(actions.getProduct, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(actions.getProductSuccess, (state, { payload }) => {
    return {
      ...state,
      loading: false,
      product: payload,
      error: undefined,
    };
  }),

  on(actions.getProductFailure, (state, { payload }) => {
    return {
      ...state,
      error: payload,
      loading: false,
    };
  }),

  on(actions.clearProduct, (state) => {
    return {
      ...state,
      product: {},
    };
  })
);

export function ProductReducer(state: ProductState | undefined, action: Action) {
  return _productReducer(state,action)
}