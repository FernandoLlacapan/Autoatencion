import { Injectable } from '@angular/core';

interface Product {
  name: string;
  price: number;
  photo: string;
  quantity: number;
  categoryId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor() {}

  addProduct(name: string, price: number, photo: string, quantity: number, categoryId: string): void {
    const newProduct: Product = { name, price, photo, quantity, categoryId };
    this.products.push(newProduct);
  }

  getProducts(): Product[] {
    return this.products;
  }

  clearProducts() {
    this.products = [];
  }
}
