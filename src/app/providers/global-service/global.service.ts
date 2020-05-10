import {Injectable} from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';
import {StorageService} from '../storage/storage.service';
import {AppUrlService} from '../../constants/app-url-service/app-url-service.service';
import {Network, NetworkStatus} from '@capacitor/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    public isLoggedIn: boolean;
    public redirectUrl: string;
    public accessToken: string;
    public networkInfo: NetworkStatus;
    public isOfflineMode: boolean;


    private user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    private isUserMenuDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private accessToken$: BehaviorSubject<string> = new BehaviorSubject<string>(null);


    constructor(
        private appUrl: AppUrlService,
        private toastController: ToastController,
        private alertController: AlertController,
        private storageService: StorageService,
        private router: Router
    ) {
        this.isLoggedIn = false;
        this.isOfflineMode = false;

        this.getUserToken();
    }

    async addNetworkStatedListener() {
        this.networkInfo = await Network.getStatus();
        console.log('addNetworkStatedListener: ', this.networkInfo);
        Network.addListener('networkStatusChange', (status) => {
            console.log('Network status changed', status);
        });
    }

    getUserToken() {
        const token = this.storageService.getUserToken();

        if (token) {
            this.isLoggedIn = true;
            this.setAccessToken(token);
            this.setUserMenuDisabled(false);
        } else {
            this.isLoggedIn = false;
            this.setUserMenuDisabled(true);
        }
    }

    async setAccessToken(token) {
        this.isLoggedIn = true;
        this.accessToken = token;
        this.accessToken$.next(token);
        this.setUserMenuDisabled(false);
        return this.storageService.setUserToken(token);
    }

    getAccessToken() {
        return this.accessToken$;
    }

    async logout() {
        this.isLoggedIn = false;
        this.setUserMenuDisabled(true);
        this.storageService.clear();
        this.router.navigate(['/introduction']);
    }

    async setUser(user) {
        this.user$.next(user);
        return this.storageService.setUser(user);
    }

    getUser() {
        return this.user$;
    }

    getUserMenu() {
        return this.isUserMenuDisabled$;
    }

    async setUserMenuDisabled(value) {
        this.isUserMenuDisabled$.next(value);
    }


    async showMessage(type, data) {
        switch (type.toLowerCase()) {
            case 'alert' :
                this.presentAlert(data);
                break;
            case 'toast' :
                this.presentToast(data);
                break;
        }
    }

    async presentToast(data) {
        const toast = await this.toastController.create({
            message: data.message,
            duration: (data.duration) ? data.duration : 2000
        });
        return toast.present();
    }

    async presentAlert(data) {
        const alert = await this.alertController.create({
            header: data.title,
            subHeader: data.subHeader,
            message: data.message,
            buttons: ['OK']
        });

        return alert.present();
    }

    async addAnimation(ele, addAfterTime: number, removeAfterTime: number, classes: string) {
        const element = ele.el || ele.nativeElement;
        setTimeout(() => {
            const classList = element.classList.value;
            element.classList += ' ' + classes;
            // console.log('animation added: ', classList);
            if (removeAfterTime > 0) {
                setTimeout(() => {
                    classList.replace(classes, '');
                    element.classList = classList;
                    // console.log('animation remove: ', classList);
                }, removeAfterTime);
            }
        }, addAfterTime);
    }

    removeAnimation(el, removeAfterTime: number, classes: string) {
        const classList = el.classList.value;
        setTimeout(() => {
            // console.log('animation remove before: ', classList);
            classList.replace(classes, '');
            el.classList = classList;
            // console.log('animation remove after: ', classList);
        }, removeAfterTime);
    }
}
