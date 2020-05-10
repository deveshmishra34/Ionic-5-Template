import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {SplashScreenComponent} from './splash-screen.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [
        SplashScreenComponent
    ],
    imports: [
        BrowserModule,
        IonicModule
    ],
    providers: [],
    entryComponents: [
        SplashScreenComponent
    ],
    exports: [
        SplashScreenComponent
    ]
})

export class SplashScreenModule {

}