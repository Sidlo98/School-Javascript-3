import { Action, createReducer, on, Store } from '@ngrx/store';
import { IProduct } from 'src/app/models/product.model';
import * as catalogActions from '../actions/productCatalog.actions';

const initState: IProduct[] = [
  {
    id: '15135as',
    name: 'test',
    price: 999,
    quantity: 2,
  },
  {
    id: '15135asdasd',
    name: 'test2',
    price: 999,
    quantity: 2,
  },
];

const _productCatalogReducer = createReducer(
  initState,
  on(catalogActions.addProduct, (state, { product }) => [...state, product]),
  on(catalogActions.removeProduct, (state, { id }) =>
    state.filter((i) => i.id !== id)
  ),
  on(catalogActions.increment, (state, { product }) => {
    let _index = state.findIndex((i) => i.id === product.id);

    return state.map((item, index) => {
      if (index === _index) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
  }),
  on(catalogActions.decrement, (state, { product }) => {
    let _index = state.findIndex((i) => i.id === product.id);

    return state.map((item, index) => {
      if (index === _index) {
        if (item.quantity === 1) {
        } else {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
      }
      return item;
    });
  })
);

export function productCatalogReducer(
  state: IProduct[] | undefined,
  action: Action
) {
  return _productCatalogReducer(state, action);
}
