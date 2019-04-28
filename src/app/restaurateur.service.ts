import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import {Product} from './models/product/Product';
import { Observable } from 'rxjs';
import {Client} from './models/client/Client';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

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

      /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    private log(message: string) {
      console.log(message);
    }

     // TODO Mostrar mensajes al usuario de si se ha insertado o no el cliente
    insertClient(client: Client): Observable<Client> {
    const dataOfNewClient = {
      'name': client.name,
      'sex': client.sex,
      'birthdate': client.birthdate,
      'telephone': client.telephone,
      'email': client.email,
      'registration_date': client.registration_date
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post('http://localhost:3000/api/createClient', dataOfNewClient, httpOptions).pipe(
      tap((newClient: Client) => this.log('A client was created')),
      catchError(this.handleError<Client>('insertClient'))
    );
  }

  // TODO Implementar
  // Returns the requests of the client
  getRequestsOfClient() {}

  // Find clients by email
  findClientByEmail(emailOfClient: string): Observable<Client> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const data = {
      'email': emailOfClient
    };
    return this.http.post('http://localhost:3000/api/findClientByEmail', data, httpOptions).pipe(
      tap((newClient: Client) => this.log('Results of searching clients by email')),
      catchError(this.handleError<Client>('findClientByEmail'))
    );
  }
}
