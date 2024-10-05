import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products: Product[] = []; // Los productos para mostrar en la página
  selectedCategory: string = ''; // La categoría seleccionada

  constructor(private cartService: CartService) {}

  // Método para agregar productos al carrito
  addToCart(product: Product) {
    if (product.quantity > 0) {
      this.cartService.addToCart(product);
    }
  }

  // Método para incrementar la cantidad de un producto
  incrementQuantity(product: Product) {
    product.quantity += 1;
  }

  // Método para decrementar la cantidad de un producto
  decrementQuantity(product: Product) {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }
}
