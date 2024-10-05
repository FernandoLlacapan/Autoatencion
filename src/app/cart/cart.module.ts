import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';
import { CartPage } from './cart.page';  // Asegúrate de que la ruta es correcta

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule
  ],
  declarations: [CartPage]  // Asegúrate de que está declarado como componente
})
export class CartPageModule {}
