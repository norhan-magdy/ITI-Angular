import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartItemsService } from '../service/cart-items.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  faCartShopping = faCartShopping;
  cartProducts: Product[] = [];

  constructor(private CartItemsService: CartItemsService) {}
  ngOnInit() {
    this.CartItemsService.getCart().subscribe({
      next: (result) => {
        this.cartProducts = result;
        console.log('hello', this.cartProducts);
      },
    });
  }
}
