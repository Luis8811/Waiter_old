import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab-invoice',
  templateUrl: './tab-invoice.page.html',
  styleUrls: ['./tab-invoice.page.scss'],
})
export class TabInvoicePage implements OnInit {
  requestId = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.requestId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
