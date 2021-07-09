import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/productCatalog.actions'
import { ProductCatalogState } from "../models/productCatalog.state";

const initState: ProductCatalogState = {
  productCatalog: [],
  loading: false,
  error: undefined
}


const _productCatalogReducer = createReducer(
  initState,

  on(actions.getProducts, state => {
    return {
      ...state,
      loading: true
    }
  }),

  on(actions.getProductsSuccess, (state, {payload}) => {
    return {
      ...state, 
      loading: false,
      productCatalog: payload,
      error: undefined
    }
  }),

  on(actions.getProductsFailure, (state, {payload}) => {
    return {
      ...state,
      error: payload,
      loading: false
    }
  })
)

export function productCatalogReducer(state: ProductCatalogState | undefined, action: Action) {
  return _productCatalogReducer(state, action)
}