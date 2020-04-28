import {Component} from '@angular/core';
import {DevicePluginService} from '../../plugins/device-plugin/device-plugin.service';
import {ActionSheetOptionStyle, Modals} from '@capacitor/core';
import {StatusBarPluginService} from '../../plugins/status-bar-plugin/status-bar-plugin.service';
import {SharePluginService} from '../../plugins/share-plugin/share-plugin.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    providers: [DevicePluginService, SharePluginService]
})
export class Tab1Page {

    constructor(
        private devicePluginService: DevicePluginService,
        private statusBarPluginService: StatusBarPluginService,
        private sharePluginService: SharePluginService
    ) {
    }

    async getDeviceInfo() {
        const deviceInfo = await this.devicePluginService.getDeviceInfo();
        console.log('deviceInfo: ', deviceInfo);
    }

    async showActions() {
        const promptRet = await Modals.showActions({
            title: 'Photo Options',
            message: 'Select an option to perform',
            options: [
                {
                    title: 'Upload'
                },
                {
                    title: 'Share'
                },
                {
                    title: 'Remove',
                    style: ActionSheetOptionStyle.Destructive
                }
            ]
        });
        console.log('You selected', promptRet);
    }

    async changeStatusBar() {
        this.statusBarPluginService.changeStatusBar();
    }

    async hideStatusBar() {
        this.statusBarPluginService.hideStatusBar();
    }

    async showStatusBar() {
        this.statusBarPluginService.showStatusBar();
    }

    async share() {
        await this.sharePluginService.share({
            title: 'See cool stuff',
            text: 'Really awesome thing you need to see right meow',
            url: 'http://ionicframework.com/',
            dialogTitle: 'Share with buddies'
        });
    }
}
