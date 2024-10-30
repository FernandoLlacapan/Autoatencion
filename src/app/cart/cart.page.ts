import { Component, OnInit } from '@angular/core';
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
  navCtrl: any;

  constructor(private cartService: CartService) {}

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
    this.navCtrl.navigateForward('/payment');
  }
  
}
