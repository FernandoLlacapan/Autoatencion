import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: { name: string, price: number, quantity: number, image: string }[] = [];

  constructor() {}

  getCart() {
    return this.cart;
  }

  addToCart(product: { name: string, price: number, quantity: number, image: string }) {
    const existingProduct = this.cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cart.push({ ...product });
    }
  }

  incrementQuantity(product: { quantity: number }) {
    product.quantity++;
  }

  decrementQuantity(product: { quantity: number }) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  removeFromCart(product: { name: string }) {
    this.cart = this.cart.filter(item => item.name !== product.name);
  }
}
