import {Component, OnDestroy} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppPluginService} from './plugins/app-plugin/app-plugin.service';
import {Plugins} from '@capacitor/core';
import {GlobalService} from './providers/global-service/global.service';
const {App} = Plugins;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {

    lastTimeBackPress = 0;
    timePeriodToExit = 2000;
    isUserMenuDisabled = false;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private globalService: GlobalService
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnDestroy() {
    }
}
