import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-hotdogs',
  templateUrl: './hotdogs.page.html',
  styleUrls: ['./hotdogs.page.scss'],
})
export class HotdogsPage implements OnInit {

  products = [
    { name: 'HotDog Solo', price: 1590, image: 'assets/images/hotdog/hotdog-solo.jpg', quantity: 0 },
    { name: 'HotDog Palta', price: 1890, image: 'assets/images/hotdog/hotdog-palta.jpg', quantity: 0 },
    { name: 'HotDog Solo + Bebida Mini', price: 2190, image: 'assets/images/hotdog/hotdog-solo-bebida.jpg', quantity: 0 },
    { name: '2 Hotdog Palta + papas chicas + bebida mini', price: 4890, image: 'assets/images/hotdog/hotdog-palta-papas.jpg', quantity: 0 },
    { name: 'HotDog Palta + papas chicas + bebida mini', price: 3690, image: 'assets/images/hotdog/hotdog-palta-papas-mini.jpg', quantity: 0 },
    { name: 'Hotdog palta + bebida mini', price: 2490, image: 'assets/images/hotdog/hotdog-palta-mini.jpg', quantity: 0 },
    { name: '2 Hotdog Palta + bebida mini', price: 3890, image: 'assets/images/hotdog/2-hotdog-palta-bebida.jpg', quantity: 0 },
    { name: '2 Hotdog solo + bebida Mini', price: 3990, image: 'assets/images/hotdog/2-hotdog-solo-bebida.jpg', quantity: 0 }
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
