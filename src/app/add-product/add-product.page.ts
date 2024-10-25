import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage {
  productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.productForm = this.formBuilder.group({
      name: [''],
      price: [''],
      photo: [''], // Aquí puedes vincular la foto si es necesario
      quantity: [''],
      categoryId: [''], // Asume que tienes una lista de categorías
    });
  }

  addProduct() {
    const { name, price, photo, quantity, categoryId } = this.productForm.value;
    this.productService.addProduct(name, price, photo, quantity, categoryId);
    // Lógica adicional como navegación o mensajes de éxito
  }

  capturePhoto() {
    // Llama a la función de captura de foto
  }
}

