import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-lacteos',
  templateUrl: './lacteos.page.html',
  styleUrls: ['./lacteos.page.scss'],
})


export class LacteosPage implements OnInit {
  products = [
    { name: 'Leche sin lactosa', price: 950, image: 'assets/images/lacteos/leche-sin-lactosa.jpg', quantity: 0 },
    { name: 'Leche en Caja', price: 890, image: 'assets/images/lacteos/leche-en-caja.jpg', quantity: 0 },
    { name: 'Yogurt Variedades', price: 2350, image: 'assets/images/lacteos/yogurt-variedades.jpg', quantity: 0 }
  ];

  constructor() { }


  ngOnInit() {}

  incrementQuantity(product: Product) {

    product.quantity += 1;
  }

  decrementQuantity(product: Product) {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }
}
