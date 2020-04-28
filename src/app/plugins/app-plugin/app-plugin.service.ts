import {Injectable} from '@angular/core';
import {AppState, AppUrlOpen, Plugins} from '@capacitor/core';

const {App} = Plugins;

@Injectable({
    providedIn: 'root'
})
export class AppPluginService {

    constructor() {
        this.appStateChangeListener();
        this.backButtonListener();
        this.getLaunchUrl();
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
        App.addListener('backButton', (data: AppUrlOpen) => {
            // state.isActive contains the active state
            console.log('App backButton', data);
            App.exitApp();
        });
    }
}
