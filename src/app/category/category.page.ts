import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  public categoryName: string | undefined;
  public products: any[] | undefined;

  public menus = [
    {
      category: "Líquidos",
      items: [
        { name: "Bebida 500 ml", price: 1290, image: "assets/images/Bebida_500ml.jpg" },
        { name: "Don Limon", price: 1350, image: "assets/images/don_limon.png" },
        { name: "Jugo en Caja", price: 500, image: "assets/images/jugo_caja.png" },
        // Otros productos...
      ]
    },
    // Otras categorías...
  ];

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.categoryName = this.route.snapshot.paramMap.get('category') || '';
    this.loadProducts();
  }

  loadProducts() {
    const selectedMenu = this.menus.find(menu => menu.category === this.categoryName);
    this.products = selectedMenu ? selectedMenu.items : [];
  }

  goBack() {
    this.navCtrl.navigateBack('/home');
  }

}
