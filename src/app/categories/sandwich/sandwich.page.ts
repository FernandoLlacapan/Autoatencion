import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-sandwich',
  templateUrl: './sandwich.page.html',
  styleUrls: ['./sandwich.page.scss'],
})
export class SandwichPage implements OnInit {

  products = [
    { name: 'Croissant Variedades', price: 2990, image: 'assets/images/sandwich/croissant.jpg', quantity: 0 },
    { name: 'Hallula Aliada', price: 1490, image: 'assets/images/sandwich/hallula-aliada.jpg', quantity: 0 },
    { name: 'Wrap pollo', price: 3690, image: 'assets/images/sandwich/wrap-pollo.jpg', quantity: 0 },
    { name: 'Hamburguesa Cheddar + B.Mini + Papas Fritas Chicas', price: 5590, image: 'assets/images/sandwich/hamburguesa-cheddar.jpg', quantity: 0 },
    { name: 'Mechada Cheddar', price: 3590, image: 'assets/images/sandwich/mechada-cheddar.jpg', quantity: 0 },
    { name: 'Hamburguesa Cheddar + bebida mini', price: 4250, image: 'assets/images/sandwich/hamburguesa-cheddar-mini.jpg', quantity: 0 },
    { name: 'Sandwich Miga\'s', price: 3290, image: 'assets/images/sandwich/sandwich-migas.jpg', quantity: 0 }
  ];

  constructor() { }

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

}
