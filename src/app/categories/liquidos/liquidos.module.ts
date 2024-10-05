import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiquidosPageRoutingModule } from './liquidos-routing.module';

import { LiquidosPage } from './liquidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiquidosPageRoutingModule
  ],
  declarations: [LiquidosPage]
})
export class LiquidosPageModule {}
