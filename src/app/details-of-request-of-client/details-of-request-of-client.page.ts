import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-of-request-of-client',
  templateUrl: './details-of-request-of-client.page.html',
  styleUrls: ['./details-of-request-of-client.page.scss'],
})
export class DetailsOfRequestOfClientPage implements OnInit {
  requestId = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.requestId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
