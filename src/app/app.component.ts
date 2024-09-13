import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController) {}

  selectCategory(category: string) {
    // Implementa la lógica para mostrar los productos según la categoría
    console.log('Seleccionada categoría:', category);
    // Cierra el menú después de seleccionar una categoría
    this.menu.close();
  }
}
