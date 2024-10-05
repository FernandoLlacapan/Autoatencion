import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-liquidos',
  templateUrl: './liquidos.page.html',
  styleUrls: ['./liquidos.page.scss'],
})
export class LiquidosPage implements OnInit {
  products = [
    { name: 'Bebida 500 ml', price: 1290, image: 'assets/images/liquidos/bebida-500ml.jpg', quantity: 0 },
    { name: 'Don Limon', price: 1350, image: 'assets/images/liquidos/don-limon.jpg', quantity: 0 },
    { name: 'Jugo en caja', price: 500, image: 'assets/images/liquidos/jugo-caja.jpg', quantity: 0 },
    { name: 'Arizona', price: 2290, image: 'assets/images/liquidos/arizona.jpg', quantity: 0 },
    { name: 'Bebida lata 350ml', price: 1100, image: 'assets/images/liquidos/bebida-lata.jpg', quantity: 0 },
    { name: 'Bebida mini 220ml', price: 790, image: 'assets/images/liquidos/bebida-mini-220ml.jpg', quantity: 0 },
    { name: 'Agua Paradiso', price: 950, image: 'assets/images/liquidos/agua-paradiso.jpg', quantity: 0 },
    { name: 'Gatorade', price: 1990, image: 'assets/images/liquidos/gatorade.jpg', quantity: 0 },
    { name: 'Granizado', price: 1990, image: 'assets/images/liquidos/granizado.jpg', quantity: 0 },
    { name: 'Agua mas variedades', price: 1200, image: 'assets/images/liquidos/agua-variedades.jpg', quantity: 0 },
    { name: 'Jugo Boca ancha', price: 1100, image: 'assets/images/liquidos/jugo-boca-ancha.jpg', quantity: 0 },
    { name: 'Redbull 355ml', price: 2490, image: 'assets/images/liquidos/redbull-355ml.jpg', quantity: 0 }
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
