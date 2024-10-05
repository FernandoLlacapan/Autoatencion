import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasasDulcesPageRoutingModule } from './masas-dulces-routing.module';

import { MasasDulcesPage } from './masas-dulces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasasDulcesPageRoutingModule
  ],
  declarations: [MasasDulcesPage]
})
export class MasasDulcesPageModule {}
