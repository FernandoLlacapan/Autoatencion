import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.page.html',
  styleUrls: ['./cafe.page.scss'],
})
export class CafePage implements OnInit {

  products: Product[] = [
    { name: 'Cafe grande', price: 2350, image: 'assets/images/cafe/cafe-grande.jpg', quantity: 0 },
    { name: 'Hallula Aliada + cafe chico', price: 2890, image: 'assets/images/cafe/hallula-cafe.jpg', quantity: 0 },
    { name: 'Cafe chico', price: 1750, image: 'assets/images/cafe/cafe-chico.jpg', quantity: 0 },
    { name: 'Hallula aliada + cafe grande', price: 3590, image: 'assets/images/cafe/hallula-cafe.jpg', quantity: 0 },
    { name: '2 medias lunas + cafe chico', price: 2990, image: 'assets/images/cafe/medialunas-cafe.jpg', quantity: 0 },
    { name: '2 medias lunas + cafe grande', price: 3590, image: 'assets/images/cafe/medialunas-cafe.jpg', quantity: 0 },
    { name: 'Rellena tu vaso', price: 1800, image: 'assets/images/cafe/cafe-grande.jpg', quantity: 0 },
    { name: 'Muffin + cafe chico', price: 2990, image: 'assets/images/cafe/muffin-cafe.jpg', quantity: 0 },
    { name: 'Muffin + Cafe Grande', price: 3590, image: 'assets/images/cafe/muffin-cafe.jpg', quantity: 0 }
  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {}

  incrementQuantity(product: Product) {
    product.quantity += 1;
  }

  decrementQuantity(product: Product) {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }

  // Método para agregar productos al carrito
  addToCart(product: Product) {
    if (product.quantity > 0) {
      this.cartService.addToCart(product);
    }
  }
}
