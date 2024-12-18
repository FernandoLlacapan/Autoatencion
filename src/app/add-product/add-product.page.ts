import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage {
  product = { name: '', price: 0, photo: '', quantity: 0, categoryId: '' };
  photo: string | null = null;

  constructor(private productService: ProductService) {}

  async capturePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    this.product.photo = `data:image/jpeg;base64,${image.base64String}`;
  }

  addProduct() {
    const { name, price, photo, quantity, categoryId } = this.product;
    this.productService.addProduct(name, price, photo, quantity, categoryId);
  }
  
}
