import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss'],
})
export class RequestsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAddNewRequest() {
    this.router.navigate(['/add-request']);
  }

  navigateToListOfOpenedRequests() {
    this.router.navigate(['/open-requests']);
  }

}
