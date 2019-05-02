import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product/Product';
import {Client} from '../models/client/Client';
import {RestaurateurService} from '../restaurateur.service';
import { Request } from '../models/request/Request';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.page.html',
  styleUrls: ['./add-request.page.scss'],
})
export class AddRequestPage implements OnInit {
  public descriptionOfRequest: string;
  public availableProducts: Product[];
  public registeredClients: Client[];
  public selectedProducts: Product[];
  public client: Client; // the customer owner of the request
  public emailOfClient: string;
  public selectedOptions: string;

  constructor(private restaurateurService: RestaurateurService) { }

  ngOnInit() {
    this.emailOfClient = '';
    this.selectedOptions = '';
    this.descriptionOfRequest = '';
    this.loadAvailableProducts();
    this.loadRegisteredClients();
  }

  // FIXME Arreglar
  public makeRequest () {
    const a = 'a,b,c,d';
    // console.log('Split de un string: ' + a.split(',').length);
    this.getClientWithEmail();
    const  currentRequest = new Request();
    currentRequest.description = this.descriptionOfRequest;
    // FIXME Arreglar para obtener los productos seleccionados del control select
    this.selectedProducts =  this.getSelectedProducts(); // this.availableProducts;
    currentRequest.products = this.selectedProducts;
    this.restaurateurService.insertRequest(this.client, currentRequest).subscribe(factRequest => console.log(factRequest));
    this.selectedOptions = '';
  }

  // Load all the available products
  public loadAvailableProducts () {
    this.restaurateurService.getProducts().subscribe(products => {
      this.availableProducts = products;
    });
  }
  // Load all the registered clients
  public loadRegisteredClients () {
    this.restaurateurService.getClients().subscribe(clients => {
      this.registeredClients = clients;
    });
  }

  // FIXME arreglar para que muestre un mensaje de error en caso de que no se encuentre el cliente con el email dado
  getClientWithEmail() {
    this.client = null;
    let clientFounded = false;
    let i = 0;
    while (clientFounded === false && i < this.registeredClients.length) {
      if (this.registeredClients[i].email === this.emailOfClient) {
        this.client = this.registeredClients[i];
        clientFounded = true;
      }
      i++;
    }
  }

  // It shows the selected products
  onChange(selectedValue) {
   console.log('Selected:' + selectedValue);
  }

  // Returns an array of the selected products
  public getSelectedProducts() {
    if (this.selectedOptions === null) {
      this.selectedOptions = '';
    }
    const selectedProductsIds = this.getArrayOfSelectedProducts(this.selectedOptions);
    const products = new Array();
    let i = 0;
    for (i = 0; i < selectedProductsIds.length; i++) {
      if (selectedProductsIds[i] !== '') {
        products.push(this.getProductById(selectedProductsIds[i]));
      }
    }
    return products;
  }

  // FIXME Intentar usar la función split(',')
  public getArrayOfSelectedProducts (products: string) {
    // return products.split(',');
    return products.toString().split(',');
  }

  // Returns the product with prouctId or null
  getProductById(productId: string) {
    let i = 0;
    let product = null;
    let productFound = false;
    while (productFound === false && i < this.availableProducts.length) {
      if (this.availableProducts[i]._id === productId) {
        productFound = true;
        product = this.availableProducts[i];
      }
      i++;
    }
    return product;
  }

}
