import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { NavController } from '@ionic/angular';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-promociones-fritas',
  templateUrl: './promociones-fritas.page.html',
  styleUrls: ['./promociones-fritas.page.scss'],
})
export class PromocionesFritasPage implements OnInit {

  products =  [
    { name: 'Combo nugget', price: 4190, image: 'assets/images/promociones-fritas/combo-nugget.jpg', quantity: 0 },
    { name: 'Papas fritas grandes', price: 1990, image: 'assets/images/promociones-fritas/papas-medianas.jpg', quantity: 0 },
    { name: 'Papas fritas XL', price: 3890, image: 'assets/images/promociones-fritas/papas-grandes.jpg', quantity: 0 },
    { name: 'Papas fritas pequeñas', price: 1550, image: 'assets/images/promociones-fritas/papas-pequenas.jpg', quantity: 0 }
  ];

  constructor(private cartService: CartService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  incrementQuantity(product: Product) {

    product.quantity += 1;
  }

  decrementQuantity(product: Product) {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }
  addToCart(product: Product) {
    if (product.quantity > 0) {
      this.cartService.addToCart(product);
    }
  }

  goToHome() {
    this.navCtrl.navigateBack('/home');
  }

}
