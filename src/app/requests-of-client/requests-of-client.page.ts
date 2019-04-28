import { Component, OnInit } from '@angular/core';
import {RestaurateurService} from '../restaurateur.service';
import {Client} from '../models/client/Client';

@Component({
  selector: 'app-requests-of-client',
  templateUrl: './requests-of-client.page.html',
  styleUrls: ['./requests-of-client.page.scss'],
})
export class RequestsOfClientPage implements OnInit {
  public emailOfClient: string;
  public clients: Client[];

  constructor(private restaurateurService: RestaurateurService) { }

  ngOnInit() {
    this.emailOfClient = '';
  }

  // FIXME arreglar para que muestre todas las solicitudes realizadas por el cliente con el email dado
  findRequestsOfClient() {
    this.restaurateurService.findClientByEmail(this.emailOfClient).subscribe(clients => console.log(clients));
  }

}
