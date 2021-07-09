import { CartProduct } from '../models/cartProduct.model';
import * as actions from '../actions/cart.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { state } from '@angular/animations';

const initState: CartProduct[] = [];

const _cartReducer = createReducer(
  initState,

  on(actions.addToCart, (state, { payload }) => {
    return [...state, payload];
  }),

  on(actions.removeFromCart, (state, { payload }) => {
    return state.filter((i) => i.product._id !== payload);
  }),

  on(actions.increment, (state, { payload }) => {
    let _index = state.findIndex((i) => i.product._id === payload.product._id);

    return state.map((item, index) => {
      if (index !== _index) {
        return item;
      } else {
        return {
          product: item.product,
          quantity: item.quantity + 1,
        };
      }
    });
  }),

  on(actions.decrement, (state, { payload }) => {
    let _index = state.findIndex((i) => i.product._id === payload.product._id);

    return state.map((item, index) => {
      if (index !== _index) {
        return item;
      } else {
        return {
          product: item.product,
          quantity: item.quantity - 1,
        };
      }
    });
  }),

  on(actions.clearCart, (state) => {
    return [];
  })
);

const total: number = 0;

const _totalReducer = createReducer(
  total,

  on(actions.cartTotal, (state, { payload }) => {
    return (state = payload);
  })
);

const amount: number = 0;

const _amountReducer = createReducer(
  amount,

  on(actions.cartAmount, (state, { payload }) => {
    return (state = payload);
  })
);

export function cartReducer(state: CartProduct[] | undefined, action: Action) {
  return _cartReducer(state, action);
}

export function totalReducer(state: number | undefined, action: Action) {
  return _totalReducer(state, action);
}

export function amountReducer(state: number | undefined, action: Action) {
  return _amountReducer(state, action);
}
