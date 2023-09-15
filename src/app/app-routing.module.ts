import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, notLoggedGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
    canActivate: [notLoggedGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./pages/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'fornecedores',
    loadChildren: () =>
      import('./pages/providers/providers.module').then(
        (m) => m.ProvidersModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'gado',
    loadChildren: () =>
      import('./pages/cattle/cattle.module').then((m) => m.CattleModule),
    canActivate: [authGuard],
  },
  {
    path: 'madeira',
    loadChildren: () =>
      import('./pages/wood/wood.module').then((m) => m.WoodModule),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: 'dahsboard',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
