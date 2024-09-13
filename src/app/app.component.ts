import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    {
      category: "Líquidos",
      items: [
        { name: "Bebida 500 ml", price: 1290,image: "assets/images/Bebida_500ml.png" },
        { name: "Don Limon", price: 1350 },
        { name: "Jugo en Caja", price: 500 },
        // Otros productos...
      ]
    },
    {
      category: "Lácteos",
      items: [
        { name: "Leche sin lactosa", price: 950 },
        { name: "Leche en Caja", price: 890 },
        { name: "Yogurt Variedades", price: 2350 }
      ]
    },
    // Otras categorías...
  ];

  constructor(private navCtrl: NavController) {}

  openCategory(category: string) {
    this.navCtrl.navigateForward(`/category/${category}`);
  }
}
