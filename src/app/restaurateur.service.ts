import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Product} from './models/product/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurateurService {

  constructor(private http: HttpClient) { }

  // FIXME Returns all the products from the BD
  getProducts(): Observable<Product[]> {
    return this.http.get('http://localhost:3000/api/products').pipe(map((res) => <any[]> res));
  }
}
