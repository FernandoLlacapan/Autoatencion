import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  selectedCategory: string | undefined;
  products: Product[] = [];

  menus = [
    {
      category: 'Líquidos',
      items: [
        { name: 'Bebida 500 ml', price: 1290 },
        { name: 'Don Limon', price: 1350 },
        { name: 'Jugo en Caja', price: 500 },
        { name: 'Arizona', price: 2290 },
        // Otros productos...
      ]
    },
    {
      category: 'Lácteos',
      items: [
        { name: 'Leche sin lactosa', price: 950 },
        { name: 'Leche en Caja', price: 890 },
        { name: 'Yogurt Variedades', price: 2350 }
      ]
    },
    // Agrega las demás categorías...
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Obtener la categoría seleccionada desde la ruta
this.selectedCategory = this.route.snapshot.paramMap.get('category') || '';
    
    // Buscar los productos de la categoría seleccionada
    const categoryData = this.menus.find(menu => menu.category === this.selectedCategory);
    
    if (categoryData) {
      this.products = categoryData.items;
    }
  }
}
