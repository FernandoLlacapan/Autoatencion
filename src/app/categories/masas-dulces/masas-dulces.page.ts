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
  selector: 'app-masas-dulces',
  templateUrl: './masas-dulces.page.html',
  styleUrls: ['./masas-dulces.page.scss'],
})
export class MasasDulcesPage implements OnInit {

  products = [
    { name: 'Almendrado', price: 1350, image: 'assets/images/masas-dulces/almendrado.jpg', quantity: 0 },
    { name: 'MediaLuna', price: 790, image: 'assets/images/masas-dulces/medialuna.jpg', quantity: 0 },
    { name: 'Croissant Variedades', price: 1100, image: 'assets/images/masas-dulces/croissant.jpg', quantity: 0 },
    { name: 'Mendocino Variedades', price: 1350, image: 'assets/images/masas-dulces/mendocino.jpg', quantity: 0 },
    { name: 'Galleton Manjar', price: 1350, image: 'assets/images/masas-dulces/galleton-manjar.jpg', quantity: 0 },
    { name: 'Donuts Variedades', price: 1390, image: 'assets/images/masas-dulces/donuts.jpg', quantity: 0 },
    { name: 'Holandesa Mix', price: 1050, image: 'assets/images/masas-dulces/holandesa.jpg', quantity: 0 }
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
