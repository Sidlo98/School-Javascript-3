import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actiontypes";
import { CartProduct } from "../models/cartProduct.model";

export const addToCart = createAction(ActionTypes.addToCart, props<{payload: CartProduct }>());
export const removeFromCart = createAction(ActionTypes.removeFromCart, props<{payload: string }>());
export const increment = createAction(ActionTypes.increment, props<{payload: CartProduct}>())
export const decrement = createAction(ActionTypes.decrement, props<{payload: CartProduct}>())
export const clearCart = createAction(ActionTypes.clear)
export const cartTotal = createAction(ActionTypes.total, props<{payload: number}>())
export const cartAmount = createAction(ActionTypes.amount, props<{payload: number}>())