import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  addProduct(product: any) {
    this.productService.addProduct(product).then(() => {
      console.log('Producto agregado con éxito');
    });
  }

  updateProduct(key: string, product: any) {
    this.productService.updateProduct(key, product).then(() => {
      console.log('Producto actualizado con éxito');
    });
  }

  deleteProduct(key: string) {
    this.productService.deleteProduct(key).then(() => {
      console.log('Producto eliminado con éxito');
    });
  }
}
