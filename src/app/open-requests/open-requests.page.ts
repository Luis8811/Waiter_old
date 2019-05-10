import { Component, OnInit } from '@angular/core';
import {RestaurateurService} from '../restaurateur.service';
import {Client} from '../models/client/Client';
import {Request} from '../models/request/Request';
import {Product} from '../models/product/Product';
import {FactRequest} from '../models/request/FactRequest';
import {RequestExtended} from '../models/request/RequestExtended';
import {Router} from '@angular/router';

@Component({
  selector: 'app-open-requests',
  templateUrl: './open-requests.page.html',
  styleUrls: ['./open-requests.page.scss'],
})
export class OpenRequestsPage implements OnInit {
  public openedFactRequests: FactRequest[];
  public openedRequests: Request[];
  public requestsExtended: RequestExtended[];
  public currentRequestIdSelected: any;


  constructor(private restaurateurService: RestaurateurService, private router: Router) {
    this.openedRequests = new Array();
    this.openedFactRequests = new Array();
    this.requestsExtended = new Array();
  }

  ngOnInit() {
    // this.openedFactRequests = new Array();
  //  this.openedRequests = new Array();
     this.loadAllOpenedFactRequests();
     this.loadAllOpenedRequests();
     this.loadAllDataAboutFactRequests();
  }

  loadAllOpenedFactRequests() {
    this.restaurateurService.getOpenedRequests().subscribe(openedFactRequests => {
      this.openedFactRequests = openedFactRequests;
      // this.openedRequests = new Array(); // Initializing the array of opened requests
      console.log('Showing the opened fact requests: ');
      console.log(this.openedFactRequests);
     // this.loadAllOpenedRequests();
    });
  }

  loadAllOpenedRequests() {
    /*
    console.log('Getting all the requests by their ids');
    let i = 0;
    for (i = 0; i < this.openedFactRequests.length; i++) {
      this.openedRequests.push(this.getRequestById(this.openedFactRequests[i].request_id));
    }
    */
   this.restaurateurService.getDataOfOpenedRequests().subscribe(dataOfOpenedRequests => {
     this.openedRequests = dataOfOpenedRequests;
     console.log('Showing the data of the opened requests:');
     console.log(this.openedRequests);
   });
  }

  loadAllDataAboutFactRequests() {
    this.restaurateurService.getAllODatafOpenedFactRequests().subscribe(data => {
    this.requestsExtended = data;
    console.log('Showing the data of the extended requests:');
    console.log(this.requestsExtended);
    });
  }

  getRequestById(requestId: string) {
    const mockObtainedRequest = new Request();
    mockObtainedRequest._id = '';
    mockObtainedRequest.description = '';
    let obtainedRequest = mockObtainedRequest;
    this.restaurateurService.getRequestById(requestId).subscribe(request => {
      console.log('obtained request: ');
      obtainedRequest = request;
      console.log(obtainedRequest);
    });
    return obtainedRequest;
  }

  navigateToDetailsOfRequest() {
    this.router.navigate(['/details-of-request-of-client']);
    console.log('El id de la solicitud seleccionada es: ');
  }

 /*  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ionPull(event) {
    // Emitted while the user is pulling down the content and exposing the refresher.
    console.log('ionPull Event Triggered!');
  }
  ionStart(event) {
    // Emitted when the user begins to start pulling down.
    console.log('ionStart Event Triggered!');
  }
 */

 updateSelectedRequest(valor) {
   this.currentRequestIdSelected = valor;
   console.log('El valor recibido es: ' + this.currentRequestIdSelected);
   this.router.navigate(['/details-of-request-of-client', this.currentRequestIdSelected]);
 }

}
