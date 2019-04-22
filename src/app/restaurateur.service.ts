import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Product} from './models/product/Product';
import { Observable } from 'rxjs';
import {Client} from './models/client/Client';

@Injectable({
  providedIn: 'root'
})
export class RestaurateurService {

  constructor(private http: HttpClient) { }

  // Returns all the products from the API
  getProducts(): Observable<Product[]> {
    return this.http.get('http://localhost:3000/api/products').pipe(map((res) => <any[]> res));
  }

  // Returns all the clients from the API
  getClients(): Observable<Client[]> {
    return this.http.get('http://localhost:3000/api/clients').pipe(map((res) => <any[]> res));
  }
}
