import {Component, OnDestroy} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {GlobalService} from './providers/global-service/global.service';
import {AppPluginService} from './plugins/app-plugin/app-plugin.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {

    mainMenuDisabled = true;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private appPluginService: AppPluginService,
        private globalService: GlobalService,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.globalService.addNetworkStatedListener();
            this.listenForUserMenu();
            this.listerForTokenChange();
            this.appPluginService.backButtonListener();
        });
    }

    ngOnDestroy() {
    }

    async listerForTokenChange() {
        this.globalService.getAccessToken().subscribe(
            token => {
                if (token) {
                    console.log('User is logged in', token);
                } else {
                    console.log('User is not logged in');
                }
            }
        );
    }

    async listenForUserMenu() {
        this.globalService.getUserMenu().subscribe(
            userMenu => {
                if (typeof userMenu === 'boolean') {
                    this.mainMenuDisabled = userMenu;
                }
            }
        );
    }
}
