import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasasDulcesPage } from './masas-dulces.page';

const routes: Routes = [
  {
    path: '',
    component: MasasDulcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasasDulcesPageRoutingModule {}
