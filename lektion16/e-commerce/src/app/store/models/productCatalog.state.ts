import { Product } from './product.model';

export interface ProductCatalogState {
  productCatalog: Product[];
  loading: boolean;
  error: Error | undefined;
}
