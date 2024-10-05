import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-masas-saladas',
  templateUrl: './masas-saladas.page.html',
  styleUrls: ['./masas-saladas.page.scss'],
})
export class MasasSaladasPage implements OnInit {

  products =  [
    { name: 'Empanada Pino', price: 2290, image: 'assets/images/masas-saladas/empanada-pino.jpg', quantity: 0 },
    { name: 'Empanada Queso', price: 2290, image: 'assets/images/masas-saladas/empanada-queso.jpg', quantity: 0 },
    { name: 'Chaparrita', price: 2290, image: 'assets/images/masas-saladas/chaparrita.jpg', quantity: 0 },
    { name: 'Empanada Caprense', price: 2490, image: 'assets/images/masas-saladas/empanada-caprense.jpg',quantity: 0},
    { name: 'Empanada Vegetariana', price: 2490, image: 'assets/images/masas-saladas/empanada-veganariana.jpg', quantity: 0},
    { name: 'Empanada Queso + Bebida Mini', price: 2950, image: 'assets/images/masas-saladas/empanada-queso-bebida.jpg', quantity: 0},
    { name: 'Empanada Pino + Bebida Mini', price: 2950, image: 'assets/images/masas-saladas/empanada-pino-bebida.jpg', quantity: 0}
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
