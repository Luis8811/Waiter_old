import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab-client',
  templateUrl: './tab-client.page.html',
  styleUrls: ['./tab-client.page.scss'],
})
export class TabClientPage implements OnInit {
  requestId = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.requestId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
