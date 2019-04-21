import { Component, OnInit } from '@angular/core';
import {RestaurateurService} from '../restaurateur.service';
import {Product} from '../models/product/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  constructor(private restaurateurService: RestaurateurService) { }
  public products: Product[];

  ngOnInit() {
    this.restaurateurService.getProducts().subscribe(data => {
    console.log(data);
    this.products = data;
    console.log(this.products);
  });
  }

}
