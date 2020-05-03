import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'introduction',
        loadChildren: () => import('./pages/introduction/introduction.module').then(m => m.IntroductionPageModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'game',
        loadChildren: () => import('./pages/game/game.module').then(m => m.GameModule)
    },
    {
        path: 'payment',
        loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentModule)
    },
    {
        path: '*',
        redirectTo: '/auth'
    },
  {
    path: 'refer-and-earn',
    loadChildren: () => import('./pages/refer-and-earn/refer-and-earn.module').then( m => m.ReferAndEarnPageModule)
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
