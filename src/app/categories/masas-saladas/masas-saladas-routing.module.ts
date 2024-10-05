import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasasSaladasPage } from './masas-saladas.page';

const routes: Routes = [
  {
    path: '',
    component: MasasSaladasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasasSaladasPageRoutingModule {}
