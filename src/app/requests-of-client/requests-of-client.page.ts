import { Component, OnInit } from '@angular/core';
import {RestaurateurService} from '../restaurateur.service';
import {Client} from '../models/client/Client';
import {Request} from '../models/request/Request';
import {Product} from '../models/product/Product';

@Component({
  selector: 'app-requests-of-client',
  templateUrl: './requests-of-client.page.html',
  styleUrls: ['./requests-of-client.page.scss'],
})
export class RequestsOfClientPage implements OnInit {
  public emailOfClient: string;
  public clients: Client[];
  public requests: Request[];
  public products: Product[];

  constructor(private restaurateurService: RestaurateurService) { }

  ngOnInit() {
    this.emailOfClient = '';
    this.loadProducts();
  }

  // FIXME arreglar para que muestre los datos de las solicitudes hechas en un formato agradable
  findRequestsOfClient() {
   this.requests = new Array();
    this.restaurateurService.findClientByEmail(this.emailOfClient).subscribe(client => {
      console.log(client);
      this.clients = client;
      console.log('Logging this.clients');
      console.log(this.clients);
      if (this.clients.length > 0) {
        const clientId = this.clients[0]._id;
        console.log('This client Id: ' + this.clients[0]._id);
        this.restaurateurService.getRequestsOfClient(clientId).subscribe( requestsOfClient => {
          this.requests = requestsOfClient;
          console.log('Logging the requests of the client');
          console.log(this.requests);
        });
      }
    });
  }

  // Loads all the products
  loadProducts() {
    this.restaurateurService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  // Returns an array with the names of the products
  getNamesOfProducts(productsIds: Product[]) {
    let namesOfProducts = '';
    for (let i = 0; i < productsIds.length; i++) {
     namesOfProducts += productsIds[i].name;
     if (i !== (productsIds.length - 1)) {
       namesOfProducts += ', ';
     }
    }
    return namesOfProducts;
  }

}
