import { CartProduct } from './cartProduct.model';
import { ProductState } from './product.state';
import { ProductCatalogState } from './productCatalog.state';

export interface AppState {
  readonly productCatalog: ProductCatalogState;
  readonly product: ProductState;
  readonly cart: CartProduct[];
  readonly cartTotal: number;
  readonly cartAmount: number;
}
