import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public menus = [
    { category: "Líquidos" },
    { category: "Lácteos" },
    { category: "Masas Dulces" },
    { category: "Masas Saladas" },
    { category: "Sandwich y Promociones" },
    { category: "Café y Promociones" },
    { category: "Hotdogs y Promociones" },
    { category: "Promociones Fritas" }
  ];

  constructor(private navCtrl: NavController) {}

  openCategory(category: string) {
    this.navCtrl.navigateForward(`/category/${category}`);
  }
}
