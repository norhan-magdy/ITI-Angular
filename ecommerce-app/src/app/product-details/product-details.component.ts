import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../../public/products.json';
import { NgFor, CommonModule } from '@angular/common';
import { DiscountPricePipe } from '../pipes/discount-price.pipe';

@Component({
  selector: 'app-product-details',
  imports: [NgFor, CommonModule, DiscountPricePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  activatedRoute = inject(ActivatedRoute);

  bg = 'backgroundColor: #e9d8fd';

  products = products;
  product: any;

  ngOnInit() {
    const pramId = this.activatedRoute.snapshot.params['id'];
    const product = products.find((product) => product.id === Number(pramId));
    this.product = product;
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return [
      ...Array(fullStars).fill('bi bi-star-fill'),
      ...Array(halfStar).fill('bi bi-star-half'),
      ...Array(emptyStars).fill('bi bi-star'),
    ];
  }
}
