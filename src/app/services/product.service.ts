import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = []; // Aquí guardas tus productos

  constructor() {}

  addProduct(name: string, price: number, photo: string, quantity: number, categoryId: string) {
    const newProduct = {
      id: this.generateId(), // función para generar un ID único
      name,
      price,
      photo,
      quantity,
      categoryId,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  private generateId() {
    return Math.random().toString(36).substring(2, 15); // Método simple para generar un ID
  }
}