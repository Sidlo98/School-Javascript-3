import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ActionTypes } from "../actiontypes";
import { ProductCatalogService } from "../services/product-catalog.service";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class ProductsEffect {
  constructor(private actions$: Actions, private productService: ProductCatalogService) {}


  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getProducts),
    mergeMap(() => this.productService.getProducts()
    .pipe(
      map(products => ({type: ActionTypes.getProductsSuccess, payload: products})),
      catchError(error => of({type: ActionTypes.getProductsFailure, payload: error}))
    ))
  ))

  loadProduct$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.getProduct),
    mergeMap((action: any) => this.productService.getOneProduct(action.payload)
    .pipe(
      map(product => ({type: ActionTypes.getProductSuccess, payload: product})),
      catchError(error => of({type: ActionTypes.getProductFailure, payload: error}))
    ))
  ))

}