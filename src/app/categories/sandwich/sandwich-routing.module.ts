import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandwichPage } from './sandwich.page';

const routes: Routes = [
  {
    path: '',
    component: SandwichPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandwichPageRoutingModule {}
