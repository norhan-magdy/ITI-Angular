import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../types/product';
import { CartItemsService } from '../service/cart-items.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(
    private router: Router,
    private _CartItemsService: CartItemsService
  ) {}

  addToCart() {
    this._CartItemsService.addToCart(this.product); // Input property to receive product data
  }

  handelRedirictToDetails(id: number) {
    this.router.navigate(['/product-detailes', id]);
  }
}
