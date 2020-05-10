import {Component, OnDestroy, QueryList, ViewChildren} from '@angular/core';

import {
    IonRouterOutlet,
    Platform,
} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {GlobalService} from './providers/global-service/global.service';
import {AppPluginService} from './plugins/app-plugin/app-plugin.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy {
    @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

    mainMenuDisabled = true;
    lastTimeBackPress = 0;
    timePeriodToExit = 2000;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private globalService: GlobalService,
        private appPluginService: AppPluginService,
        private router: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.globalService.addNetworkStatedListener();
            // this.listenForUserMenu();
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
                    this.router.navigate(['/introduction']);
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
