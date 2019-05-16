import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab-complaints',
  templateUrl: './tab-complaints.page.html',
  styleUrls: ['./tab-complaints.page.scss'],
})
export class TabComplaintsPage implements OnInit {

  requestId = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.requestId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
