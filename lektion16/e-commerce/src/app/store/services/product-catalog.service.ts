import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {

  private _baseUrl: string = 'http://localhost:9999/api/products/'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this._baseUrl)
  }

  getOneProduct(id: string) {
    return this.http.get<Product>(this._baseUrl + id)
  }

}
