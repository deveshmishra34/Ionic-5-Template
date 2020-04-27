import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ShowErrorService {
    showAlert = false;

    constructor(
        private alertController: AlertController
    ) {
    }

    showError(err) {
        const errorMsg = {
            status: (err.error && err.error.status) ? err.error.status : '',
            message: ''
        };

        if (err && err['error'] && err['error'] && err['error'].message) {
            errorMsg.message = err['error'].message;
        } else if (err && err['errorMessage']) {
            errorMsg.message = err['errorMessage'];
        } else if (err && err['message']) {
            errorMsg.message = err['message'];
        } else if (!navigator.onLine) {
            errorMsg.message = `There is no internet connection, Please check your connection`;
        } else {
            errorMsg.message = 'There were some error(s). Please check your internet connection or try again later';
        }

        this.presentAlert(errorMsg);
    }

    async presentAlert(errorMsg) {
        const alertRef = await this.alertController.create({
            header: 'Error',
            subHeader: errorMsg.message,
            buttons: [{
                'text': 'Ok',
                handler: () => {
                    this.showAlert = false;
                }
            }]
        });

        if (!this.showAlert) {
            alertRef.present().finally(
                () => {
                    this.showAlert = true;
                }
            );
        }


    }
}
