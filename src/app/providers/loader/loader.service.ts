import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private loading: any;
    private content: string;
    private messages = [];

    constructor(
        public loadingController: LoadingController
    ) {

    }

    async loadData(message) {
        if (this.messages.length === 0 && this.messages.indexOf(message) === -1) {
            this.messages.push(message);
            this.content = message;
            this.loading = await this.loadingController.create({
                message: message,
                showBackdrop: true,
                keyboardClose: true,
                spinner: 'crescent',
                cssClass: 'loader-css',
            });
            // this.stopLoader();
            await this.loading.present();
        }
    }

    unloadData(message?) {
        if (this.loading != null) {
            this.loading.dismiss();
            if (this.messages.indexOf(message) > -1) {
                this.messages.splice(this.messages.indexOf(message), 1);
            }
            this.content = '';
        }
    }

    stopLoader() {
        const intervalRef = setInterval(() => {
            // console.log('Running Interval: ', this.messages, this.loading);
            if (this.loading != null && !this.messages.length) {
                this.loading.dismiss();
                this.content = '';
                clearInterval(intervalRef);
            }
        }, 500);
    }

    handleIframe(iFrame: HTMLIFrameElement, message: string) {
        const promise = new Promise((resolve, reject) => {
            this.loadData(message);
            iFrame.addEventListener('load', () => {
                this.unloadData(message);
                resolve();
            });
        });
        return promise;

    }
}
