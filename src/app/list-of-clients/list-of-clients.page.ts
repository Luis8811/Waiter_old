import { Component, OnInit } from '@angular/core';
import {RestaurateurService} from '../restaurateur.service';
import {Client} from '../models/client/Client';

@Component({
  selector: 'app-list-of-clients',
  templateUrl: './list-of-clients.page.html',
  styleUrls: ['./list-of-clients.page.scss'],
})
export class ListOfClientsPage implements OnInit {

  public clients: Client[];
  constructor(private restaurateurService: RestaurateurService) { }

  ngOnInit() {
    this.restaurateurService.getClients().subscribe(data => {
      console.log(data);
      this.clients = data;
    });
  }

}
