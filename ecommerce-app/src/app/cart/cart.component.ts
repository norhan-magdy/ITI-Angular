import { Component } from '@angular/core';
import { Product } from '../types/product';
import { CommonModule } from '@angular/common';
import { CartItemsService } from '../service/cart-items.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  faTrash = faTrash;
  cartProducts: Product[] = [];

  constructor(private _CartItemsService: CartItemsService) {}

  ngOnChanges() {
    console.log();
  }

  ngOnInit() {
    this._CartItemsService.getCart().subscribe({
      next: (result) => {
        this.cartProducts = result;
        console.log(this.cartProducts);
      },
    });
  }

  increase(id: number) {
    this._CartItemsService.increaseQuantity(id);
  }

  decrease(id: number) {
    this._CartItemsService.decreaseQuantity(id);
  }

  remove(id: number) {
    this._CartItemsService.remove(id);
  }

  clearCart() {
    this._CartItemsService.clearCart();
  }

  getOneProductTotal(product: Product): number {
    return parseFloat((product.price * (product.quantity || 1)).toFixed(2));
  }

  getTotal(): number {
    return parseFloat(
      this.cartProducts
        .reduce(
          (total, product) => total + product.price * (product.quantity || 1),
          0
        )
        .toFixed(2)
    );
  }
}
