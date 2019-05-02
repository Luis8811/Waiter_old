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
  { path: 'list-of-clients', loadChildren: './list-of-clients/list-of-clients.module#ListOfClientsPageModule' },
  { path: 'add-client', loadChildren: './add-client/add-client.module#AddClientPageModule' },
  { path: 'requests-of-client', loadChildren: './requests-of-client/requests-of-client.module#RequestsOfClientPageModule' },
  { path: 'details-of-request-of-client',
   loadChildren: './details-of-request-of-client/details-of-request-of-client.module#DetailsOfRequestOfClientPageModule' },
  { path: 'add-request', loadChildren: './add-request/add-request.module#AddRequestPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
