import { Product } from './product.model';

export interface ProductState {
  product: Product;
  loading: boolean;
  error: Error | undefined;
}
