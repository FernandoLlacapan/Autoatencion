import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'lacteos',
    loadChildren: () => import('./categories/lacteos/lacteos.module').then(m => m.LacteosPageModule),
  },
  {
    path: 'liquidos',
    loadChildren: () => import('./categories/liquidos/liquidos.module').then(m => m.LiquidosPageModule),
  },
  {
    path: 'masas-dulces',
    loadChildren: () => import('./categories/masas-dulces/masas-dulces.module').then(m => m.MasasDulcesPageModule),
  },
  {
    path: 'masas-saladas',
    loadChildren: () => import('./categories/masas-saladas/masas-saladas.module').then(m => m.MasasSaladasPageModule),
  },
  {
    path: 'sandwich',
    loadChildren: () => import('./categories/sandwich/sandwich.module').then(m => m.SandwichPageModule),
  },
  {
    path: 'cafe',
    loadChildren: () => import('./categories/cafe/cafe.module').then(m => m.CafePageModule),
  },
  {
    path: 'hotdogs',
    loadChildren: () => import('./categories/hotdogs/hotdogs.module').then(m => m.HotdogsPageModule),
  },
  {
    path: 'promociones-fritas',
    loadChildren: () => import('./categories/promociones-fritas/promociones-fritas.module').then(m => m.PromocionesFritasPageModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule)
    
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
