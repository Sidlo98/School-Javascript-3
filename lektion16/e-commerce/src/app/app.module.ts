import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductCatalogComponent } from './views/product-catalog/product-catalog.component';
import { productCatalogReducer } from './store/reducers/productCatalog.reducer';
import { ProductsEffect } from './store/effects/productCatalog.effect';
import { LoadingComponent } from './components/loading/loading.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { ProductReducer } from './store/reducers/product.reducer';
import {
  amountReducer,
  cartReducer,
  totalReducer,
} from './store/reducers/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    ProductCatalogComponent,
    LoadingComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        productCatalog: productCatalogReducer,
        product: ProductReducer,
        cart: cartReducer,
        cartTotal: totalReducer,
        cartAmount: amountReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ProductsEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
