import { Component } from '@angular/core';
import { products } from '../../../public/products.json';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../types/product';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Array<Product> = products;
}
