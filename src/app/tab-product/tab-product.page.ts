import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab-product',
  templateUrl: './tab-product.page.html',
  styleUrls: ['./tab-product.page.scss'],
})
export class TabProductPage implements OnInit {
  requestId = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.requestId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
