import {Component, OnInit} from '@angular/core';
import {IonRouterOutlet, NavController, Platform} from '@ionic/angular';

@Component({
    selector: 'app-page-one',
    templateUrl: './page-one.page.html',
    styleUrls: ['./page-one.page.scss'],
})
export class PageOnePage implements OnInit {

    backRoute: string;
    backRouteText: string;

    constructor(
        private platform: Platform,
        private navController: NavController,
        private ionRouterOutlet: IonRouterOutlet
    ) {
        // if (navController.canGoBack()) {

        // }
        // if (navController.consumeTransition())
        // this.ba;
    }

    ngOnInit() {
    }

    goBack() {
        // console.log(this.routerOutlet..canGoBack());
        // this.routerOutlet.canGoBack()
    }
}
