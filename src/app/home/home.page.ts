import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface Categories {
  [key: string]: Product[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories: Categories = {
    'Lácteos': [
      { name: 'Leche sin lactosa', price: 950, image: 'assets/images/lacteos/leche-sin-lactosa.jpg', quantity: 0 },
      { name: 'Leche en Caja', price: 890, image: 'assets/images/lacteos/leche-en-caja.jpg', quantity: 0 },
      { name: 'Yogurt Variedades', price: 2350, image: 'assets/images/lacteos/yogurt-variedades.jpg', quantity: 0 }
    ],
    'Líquidos': [
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
    ],
    'Masas Dulces': [
      { name: 'Almendrado', price: 1350, image: 'assets/images/masas-dulces/almendrado.jpg', quantity: 0 },
      { name: 'MediaLuna', price: 790, image: 'assets/images/masas-dulces/medialuna.jpg', quantity: 0 },
      { name: 'Croissant Variedades', price: 1100, image: 'assets/images/masas-dulces/croissant.jpg', quantity: 0 },
      { name: 'Mendocino Variedades', price: 1350, image: 'assets/images/masas-dulces/mendocino.jpg', quantity: 0 },
      { name: 'Galleton Manjar', price: 1350, image: 'assets/images/masas-dulces/galleton-manjar.jpg', quantity: 0 },
      { name: 'Donuts Variedades', price: 1390, image: 'assets/images/masas-dulces/donuts.jpg', quantity: 0 },
      { name: 'Holandesa Mix', price: 1050, image: 'assets/images/masas-dulces/holandesa.jpg', quantity: 0 }
    ],
    'Masas Saladas': [
      { name: 'Empanada Pino', price: 2290, image: 'assets/images/masas-saladas/empanada-pino.jpg', quantity: 0 },
      { name: 'Empanada Queso', price: 2290, image: 'assets/images/masas-saladas/empanada-queso.jpg', quantity: 0 },
      { name: 'Chaparrita', price: 2290, image: 'assets/images/masas-saladas/chaparrita.jpg', quantity: 0 },
      { name: 'Empanada Caprense', price: 2490, image: 'assets/images/masas-saladas/empanada-caprense.jpg',quantity: 0},
      { name: 'Empanada Vegetariana', price: 2490, image: 'assets/images/masas-saladas/empanada-veganariana.jpg', quantity: 0},
      { name: 'Empanada Queso + Bebida Mini', price: 2950, image: 'assets/images/masas-saladas/empanada-queso-bebida.jpg', quantity: 0},
      { name: 'Empanada Pino + Bebida Mini', price: 2950, image: 'assets/images/masas-saladas/empanada-pino-bebida.jpg', quantity: 0}
    ],
    'Sandwich y Promociones': [
      { name: 'Croissant Variedades', price: 2990, image: 'assets/images/sandwich/croissant.jpg', quantity: 0 },
      { name: 'Hallula Aliada', price: 1490, image: 'assets/images/sandwich/hallula-aliada.jpg', quantity: 0 },
      { name: 'Wrap pollo', price: 3690, image: 'assets/images/sandwich/wrap-pollo.jpg', quantity: 0 },
      { name: 'Hamburguesa Cheddar + B.Mini + Papas Fritas Chicas', price: 5590, image: 'assets/images/sandwich/hamburguesa-cheddar.jpg', quantity: 0 },
      { name: 'Mechada Cheddar', price: 3590, image: 'assets/images/sandwich/mechada-cheddar.jpg', quantity: 0 },
      { name: 'Hamburguesa Cheddar + bebida mini', price: 4250, image: 'assets/images/sandwich/hamburguesa-cheddar-mini.jpg', quantity: 0 },
      { name: 'Sandwich Miga\'s', price: 3290, image: 'assets/images/sandwich/sandwich-migas.jpg', quantity: 0 }
    ],
    'Café y Promociones': [
      { name: 'Cafe grande', price: 2350, image: 'assets/images/cafe/cafe-grande.jpg', quantity: 0 },
      { name: 'Hallula Aliada + cafe chico', price: 2890, image: 'assets/images/cafe/hallula-cafe.jpg', quantity: 0 },
      { name: 'Cafe chico', price: 1750, image: 'assets/images/cafe/cafe-chico.jpg', quantity: 0 },
      { name: 'Hallula aliada + cafe grande', price: 3590, image: 'assets/images/cafe/hallula-cafe.jpg', quantity: 0 },
      { name: '2 medias lunas + cafe chico', price: 2990, image: 'assets/images/cafe/medialunas-cafe.jpg', quantity: 0 },
      { name: '2 medias lunas + cafe grande', price: 3590, image: 'assets/images/cafe/medialunas-cafe.jpg', quantity: 0 },
      { name: 'Rellena tu vaso', price: 1800, image: 'assets/images/cafe/cafe-grande.jpg', quantity: 0 },
      { name: 'Muffin + cafe chico', price: 2990, image: 'assets/images/cafe/muffin-cafe.jpg', quantity: 0 },
      { name: 'Muffin + Cafe Grande', price: 3590, image: 'assets/images/cafe/muffin-cafe.jpg', quantity: 0 }
    ],
    'Hotdogs y Promociones': [
      { name: 'HotDog Solo', price: 1590, image: 'assets/images/hotdog/hotdog-solo.jpg', quantity: 0 },
      { name: 'HotDog Palta', price: 1890, image: 'assets/images/hotdog/hotdog-palta.jpg', quantity: 0 },
      { name: 'HotDog Solo + Bebida Mini', price: 2190, image: 'assets/images/hotdog/hotdog-solo-bebida.jpg', quantity: 0 },
      { name: '2 Hotdog Palta + papas chicas + bebida mini', price: 4890, image: 'assets/images/hotdog/hotdog-palta-papas.jpg', quantity: 0 },
      { name: 'HotDog Palta + papas chicas + bebida mini', price: 3690, image: 'assets/images/hotdog/hotdog-palta-papas-mini.jpg', quantity: 0 },
      { name: 'Hotdog palta + bebida mini', price: 2490, image: 'assets/images/hotdog/hotdog-palta-mini.jpg', quantity: 0 },
      { name: '2 Hotdog Palta + bebida mini', price: 3890, image: 'assets/images/hotdog/2-hotdog-palta-bebida.jpg', quantity: 0 },
      { name: '2 Hotdog solo + bebida Mini', price: 3990, image: 'assets/images/hotdog/2-hotdog-solo-bebida.jpg', quantity: 0 }
    ],
    'Promociones Fritas': [
      { name: 'Combo nugget', price: 4190, image: 'assets/images/promociones-fritas/combo-nugget.jpg', quantity: 0 },
      { name: 'Papas fritas grandes', price: 1990, image: 'assets/images/promociones-fritas/papas-medianas.jpg', quantity: 0 },
      { name: 'Papas fritas XL', price: 3890, image: 'assets/images/promociones-fritas/papas-grandes.jpg', quantity: 0 },
      { name: 'Papas fritas pequeñas', price: 1550, image: 'assets/images/promociones-fritas/papas-pequenas.jpg', quantity: 0 }
    ]
  };

  selectedCategory: string = '';
  products: Product[] = [];

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.products = this.categories[category] || [];
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
