import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsOfRequestOfClientPage } from './details-of-request-of-client.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsOfRequestOfClientPage,
    children: [{
      path: 'tabProducts/:id',
      loadChildren: '../tab-product/tab-product.module#TabProductPageModule'
    }, /* {
      path: 'tabOpenedRequests',
      loadChildren: '../open-requests/open-requests.module#OpenRequestsPageModule'
    }, */ {
      path: 'tabInvoice/:id',
      loadChildren: '../tab-invoice/tab-invoice.module#TabInvoicePageModule'
    }, {
      path: 'tabClient/:id',
      loadChildren: '../tab-client/tab-client.module#TabClientPageModule'
    }, {
      path: 'tabComplaints/:id',
      loadChildren: '../tab-complaints/tab-complaints.module#TabComplaintsPageModule'
    }/*, {
      path: 'tabCloseRequest/:id',
      loadChildren: '../tab-close/tab-close.module#TabClosePageModule'
    }*/]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsOfRequestOfClientPage]
})
export class DetailsOfRequestOfClientPageModule {}
