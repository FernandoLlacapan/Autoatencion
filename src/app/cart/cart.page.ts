import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar el Router
import { CartService } from 'src/app/services/cart.service';

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
export class CartPage implements OnInit {
  cartProducts: Product[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {} // Inyectar el Router

  ngOnInit() {
    this.cartService.cart$.subscribe(products => {
      this.cartProducts = products;
      this.total = this.cartService.getTotal();
    });
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  proceedToPayment() {
    this.router.navigate(['/payment']); // Usar el Router para navegar
  }
}
