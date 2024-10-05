import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasasSaladasPageRoutingModule } from './masas-saladas-routing.module';

import { MasasSaladasPage } from './masas-saladas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasasSaladasPageRoutingModule
  ],
  declarations: [MasasSaladasPage]
})
export class MasasSaladasPageModule {}
