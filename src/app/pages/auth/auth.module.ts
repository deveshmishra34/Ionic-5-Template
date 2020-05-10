import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {LoginPage} from './login/login.page';
import {SignupPage} from './signup/signup.page';
import {OtpPage} from './otp/otp.page';
import {CommonModule} from '@angular/common';

const routes: Routes = [
    {
        path: 'login',
        component: LoginPage
        // loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'signup',
        component: SignupPage
        // loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
    },
    {
        path: 'otp',
        component: OtpPage
        // loadChildren: () => import('./otp/otp.module').then(m => m.OtpPageModule)
    },
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        LoginPage,
        SignupPage,
        OtpPage
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
    entryComponents: [],
    exports: []
})

export class AuthModule {

}
