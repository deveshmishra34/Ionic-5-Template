import {Injectable} from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';
import {StorageService} from '../storage/storage.service';
import {AppUrlService} from '../../constants/app-url-service/app-url-service.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    public isLoggedIn = false;
    public redirectUrl: string;
    public accessToken: string;


    private user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    private isUserMenuDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private accessToken$: BehaviorSubject<string> = new BehaviorSubject<string>(null);


    constructor(
        private appUrl: AppUrlService,
        private toastController: ToastController,
        private alertController: AlertController,
        private storageService: StorageService,
    ) {
        this.getUserToken();
    }

    getUserToken() {
        const token = this.storageService.getUserToken();

        if (token) {
            this.isLoggedIn = true;
            this.setAccessToken(token);
        } else {
            this.isLoggedIn = false;
        }
    }

    setAccessToken(token) {
        this.isLoggedIn = true;
        this.accessToken = token;
        this.accessToken$.next(token);
        this.storageService.setUserToken(token);
        return;
    }

    getAccessToken() {
        return this.accessToken$;
    }

    setUser(user) {
        this.user$.next(user);
        return this.storageService.setUser(user);
    }

    getUser() {
        return this.user$;
    }

    getUserMenu() {
        return this.isUserMenuDisabled$;
    }

    setUserMenuDisabled(value) {
        this.isUserMenuDisabled$.next(value);
    }


    showMessage(type, data) {
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
}
