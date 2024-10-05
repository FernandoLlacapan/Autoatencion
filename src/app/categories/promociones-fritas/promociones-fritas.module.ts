import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionesFritasPageRoutingModule } from './promociones-fritas-routing.module';

import { PromocionesFritasPage } from './promociones-fritas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionesFritasPageRoutingModule
  ],
  declarations: [PromocionesFritasPage]
})
export class PromocionesFritasPageModule {}
