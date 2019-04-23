import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToListOfClients() {
    this.router.navigate(['/list-of-clients']);
  }

  navigateToAddNewClient() {
    this.router.navigate(['/add-client']);
  }

}
