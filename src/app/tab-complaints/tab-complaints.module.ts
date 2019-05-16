import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabComplaintsPage } from './tab-complaints.page';

const routes: Routes = [
  {
    path: '',
    component: TabComplaintsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabComplaintsPage]
})
export class TabComplaintsPageModule {}
