import {Injectable} from '@angular/core';
import {AppState, AppUrlOpen, Plugins} from '@capacitor/core';
import {
    ActionSheetController,
    AlertController,
    LoadingController,
    MenuController,
    ModalController,
    PopoverController
} from '@ionic/angular';
import {GlobalService} from '../../providers/global-service/global.service';

const {App} = Plugins;

@Injectable({
    providedIn: 'root'
})
export class AppPluginService {

    lastTimeBackPress = 0;
    timePeriodToExit = 2000;

    constructor(
        private menuController: MenuController,
        private actionSheetController: ActionSheetController,
        private alertController: AlertController,
        private popoverController: PopoverController,
        private modalController: ModalController,
        private loadingController: LoadingController,
        private globalService: GlobalService
    ) {
    }

    async getLaunchUrl() {
        const launchUrl = await App.getLaunchUrl();
        console.log('getLaunchUrl: ', launchUrl);
    }

    async appStateChangeListener() {
        App.addListener('appStateChange', (state: AppState) => {
            // state.isActive contains the active state
            console.log('App state changed. Is active?', state.isActive);
        });
    }

    async backButtonListener() {
        App.addListener('backButton', async (data: AppUrlOpen) => {
            console.log('App backButton', data);

            const menu = await this.menuController.getOpen();
            if (menu) {
                await menu.close();
                return {};
            }

            const actionSheet = await this.actionSheetController.getTop();
            if (actionSheet) {
                await actionSheet.dismiss();
                return {};
            }

            const popover = await this.popoverController.getTop();
            if (popover) {
                await popover.dismiss();
                return {};
            }


            const modal = await this.modalController.getTop();
            if (modal) {
                await modal.dismiss();
                return {};
            }

            const loader = await this.loadingController.getTop();
            if (loader) {
                await loader.dismiss();
                return {};
            }

            const alert = await this.alertController.getTop();
            if (alert) {
                await alert.dismiss();
                return {};
            }


            // if (this.ionRouterOutlet.canGoBack()) {
            //     this.ionRouterOutlet.pop();
            // } else {
                if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
                    App.exitApp();

                } else {
                    this.globalService.showMessage('toast', {message: 'Press back again to exit App.'});
                    this.lastTimeBackPress = new Date().getTime();
                }
            // }

        });
    }
}
