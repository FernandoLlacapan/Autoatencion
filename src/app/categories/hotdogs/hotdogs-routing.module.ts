import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotdogsPage } from './hotdogs.page';

const routes: Routes = [
  {
    path: '',
    component: HotdogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotdogsPageRoutingModule {}
