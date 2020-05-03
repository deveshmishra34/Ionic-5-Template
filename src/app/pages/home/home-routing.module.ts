import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
            },
            {
                path: 'setting',
                loadChildren: () => import('../setting/setting.module').then(m => m.SettingPageModule)
            },
            {
                path: 'wallet',
                loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
