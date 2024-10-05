import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotdogsPageRoutingModule } from './hotdogs-routing.module';

import { HotdogsPage } from './hotdogs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotdogsPageRoutingModule
  ],
  declarations: [HotdogsPage]
})
export class HotdogsPageModule {}
