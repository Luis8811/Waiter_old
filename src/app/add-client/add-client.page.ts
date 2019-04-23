import { Component, OnInit } from '@angular/core';
import {RestaurateurService} from '../restaurateur.service';
import {Client} from '../models/client/Client';
import * as moment from 'moment';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.page.html',
  styleUrls: ['./add-client.page.scss'],
})
export class AddClientPage implements OnInit {
  public clientToInsert: Client;

  constructor(private restaurateurService: RestaurateurService) { }

  ngOnInit() {
    this.clientToInsert = new Client();
  }


  insertClient() {
    this.clientToInsert.registration_date = moment().format('YYYY-MM-DD').toString();
    console.log(this.clientToInsert);
    this.restaurateurService.insertClient(this.clientToInsert).subscribe(client => console.log(client));
  }

}
