import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    canActivate: [AuthGuard]
  },
  {
    path: 'lacteos',
    loadChildren: () => import('./categories/lacteos/lacteos.module').then(m => m.LacteosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'liquidos',
    loadChildren: () => import('./categories/liquidos/liquidos.module').then(m => m.LiquidosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'masas-dulces',
    loadChildren: () => import('./categories/masas-dulces/masas-dulces.module').then(m => m.MasasDulcesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'masas-saladas',
    loadChildren: () => import('./categories/masas-saladas/masas-saladas.module').then(m => m.MasasSaladasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sandwich',
    loadChildren: () => import('./categories/sandwich/sandwich.module').then(m => m.SandwichPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cafe',
    loadChildren: () => import('./categories/cafe/cafe.module').then(m => m.CafePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'hotdogs',
    loadChildren: () => import('./categories/hotdogs/hotdogs.module').then(m => m.HotdogsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'promociones-fritas',
    loadChildren: () => import('./categories/promociones-fritas/promociones-fritas.module').then(m => m.PromocionesFritasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then( m => m.AddProductPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then( m => m.ConfirmationPageModule),
    canActivate: [AuthGuard]
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
