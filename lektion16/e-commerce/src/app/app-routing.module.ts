import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogComponent } from './views/product-catalog/product-catalog.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductCatalogComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
