import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiquidosPage } from './liquidos.page';

const routes: Routes = [
  {
    path: '',
    component: LiquidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiquidosPageRoutingModule {}
