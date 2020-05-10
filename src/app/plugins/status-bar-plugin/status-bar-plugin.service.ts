import {Injectable} from '@angular/core';
import {Plugins, StatusBarStyle} from '@capacitor/core';

const {StatusBar} = Plugins;

@Injectable({
    providedIn: 'root'
})
export class StatusBarPluginService {

    isStatusBarLight = true;

    constructor() {
    }

    async changeStatusBar() {
        StatusBar.setStyle({
            style: this.isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
        });
        this.isStatusBarLight = !this.isStatusBarLight;

        // Display content under transparent status bar (Android only)
        StatusBar.setOverlaysWebView({
            overlay: true
        });
    }

    async hideStatusBar() {
        StatusBar.hide();
    }

    async showStatusBar() {
        StatusBar.show();
    }
}
