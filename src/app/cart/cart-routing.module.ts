import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPage } from './cart.page'; // Asegúrate de que el componente esté bien importado

const routes: Routes = [
  {
    path: '', // Ruta vacía para representar la ruta raíz de este módulo de características
    component: CartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Utiliza RouterModule.forChild para rutas hijas
  exports: [RouterModule], // Exporta RouterModule para que las rutas estén disponibles
})
export class CartPageRoutingModule {}
