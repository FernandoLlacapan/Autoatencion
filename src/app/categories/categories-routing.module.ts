import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
  },  {
    path: 'lacteos',
    loadChildren: () => import('./lacteos/lacteos.module').then( m => m.LacteosPageModule)
  },
  {
    path: 'liquidos',
    loadChildren: () => import('./liquidos/liquidos.module').then( m => m.LiquidosPageModule)
  },
  {
    path: 'masas-dulces',
    loadChildren: () => import('./masas-dulces/masas-dulces.module').then( m => m.MasasDulcesPageModule)
  },
  {
    path: 'masas-saladas',
    loadChildren: () => import('./masas-saladas/masas-saladas.module').then( m => m.MasasSaladasPageModule)
  },
  {
    path: 'sandwich',
    loadChildren: () => import('./sandwich/sandwich.module').then( m => m.SandwichPageModule)
  },
  {
    path: 'cafe',
    loadChildren: () => import('./cafe/cafe.module').then( m => m.CafePageModule)
  },
  {
    path: 'hotdogs',
    loadChildren: () => import('./hotdogs/hotdogs.module').then( m => m.HotdogsPageModule)
  },
  {
    path: 'promociones-fritas',
    loadChildren: () => import('./promociones-fritas/promociones-fritas.module').then( m => m.PromocionesFritasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
