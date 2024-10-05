import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromocionesFritasPage } from './promociones-fritas.page';

const routes: Routes = [
  {
    path: '',
    component: PromocionesFritasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromocionesFritasPageRoutingModule {}
