import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  cartItems: Product[] = [];  // Definir correctamente el tipo como Product[]
  total: number = 0;

  constructor(private cartService: CartService) {}

  ionViewWillEnter() {
    this.cartService.cart$.subscribe((products: Product[]) => {
      this.cartItems = products;  // Ahora `products` tiene el tipo correcto
      this.total = this.cartService.getTotal();
    });
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
