import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import {ProductsPage} from './products/products.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'products',
    loadChildren: './products/products.module#ProductsPageModule', pathMatch: 'full'},
  { path: 'clients', loadChildren: './clients/clients.module#ClientsPageModule' },
  { path: 'requests', loadChildren: './requests/requests.module#RequestsPageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'list-of-clients', loadChildren: './list-of-clients/list-of-clients.module#ListOfClientsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
