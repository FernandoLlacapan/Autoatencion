import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<Product[]>([]); // Estado del carrito
  cart$ = this.cart.asObservable(); // Exponer como observable para que otros componentes puedan suscribirse

  constructor() {}

  // Añadir producto al carrito
  addToCart(product: Product) {
    const currentCart = this.cart.value;
    const productIndex = currentCart.findIndex(p => p.name === product.name);

    if (productIndex !== -1) {
      // Si el producto ya existe, solo incrementa la cantidad
      currentCart[productIndex].quantity += product.quantity;
    } else {
      // Si el producto no existe, añádelo
      currentCart.push(product);
    }

    this.cart.next([...currentCart]); // Actualizar carrito
  }

  // Eliminar producto del carrito
  removeFromCart(product: Product) {
    let currentCart = this.cart.value;
    currentCart = currentCart.filter(p => p.name !== product.name);
    this.cart.next([...currentCart]);
  }

  // Obtener el total del carrito
  getTotal() {
    return this.cart.value.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }

  // Limpiar carrito
  clearCart() {
    this.cart.next([]);
  }
}
