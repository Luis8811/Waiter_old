import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import {Product} from './models/product/Product';
import { Observable } from 'rxjs';
import {Client} from './models/client/Client';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {Request} from './models/request/Request';
import {FactRequest} from './models/request/FactRequest';
import {RequestExtended} from './models/request/RequestExtended';

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

  // Returns the requests of the client
  getRequestsOfClient(clientId: string): Observable<Request[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const data = {
      'client_id': clientId
    };
    return this.http.post('http://localhost:3000/api/requestsOfClient', data, httpOptions).pipe(map((res) => <Request[]> res));
  }

  // Find client by email
  findClientByEmail(emailOfClient: string): Observable<Client[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const data = {
      'email': emailOfClient
    };
    return this.http.post('http://localhost:3000/api/findClientByEmail', data, httpOptions).pipe(map((res) => <Client[]> res));
  }

       // TODO Mostrar mensajes al usuario de si se ha insertado o no la solicitud
       insertRequest(client: Client, request: Request): Observable<FactRequest> {
        const dataOfNewRequest = {
          'client_id': client._id,
          'description': request.description,
          'products': request.products
        };
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post('http://localhost:3000/api/newRequest', dataOfNewRequest, httpOptions).pipe(
          tap((newRequest: FactRequest) => this.log('A request was created')),
          catchError(this.handleError<FactRequest>('insertRequest'))
        );
      }

      // Returns all the fact requests with opened state
      getOpenedRequests(): Observable<FactRequest[]> {
        return this.http.get('http://localhost:3000/api/openedRequests').pipe(map((res) => <any[]> res));
      }

      // Returns all the opened requests (Both Fact Request and Request have the field state)
      getDataOfOpenedRequests(): Observable<Request[]> {
        return this.http.get('http://localhost:3000/api/dataOfOpenedRequests').pipe(map((res) => <any[]> res));
      }

      // Returns the request with the specified id
      getRequestById(id: string): Observable<Request> {
        let url = 'http://localhost:3000/api/requests/';
        url += id;
        return this.http.get(url).pipe(map((res) => <Request> res));
      }

      // Returns the opened requests extended
      getAllODatafOpenedFactRequests(): Observable<RequestExtended[]> {
        return this.http.get('http://localhost:3000/api/allDataOfOpenedFactRequests').pipe(map((res) => <any[]> res));
      }

      // Cancels a request
      cancelRequest(requestId: string): Observable<FactRequest> {
        const dataOfRequest = {
          'request_id': requestId
        };
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.put('http://localhost:3000/api/cancelRequest', dataOfRequest, httpOptions).pipe(
          tap((requestCanceled: FactRequest) => this.log('The request was canceled.')),
          catchError(this.handleError<FactRequest>('cancelRequest'))
        );
      }
}
