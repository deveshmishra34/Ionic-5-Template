import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from '../../../providers/global-service/global.service';

@Component({
    selector: 'app-otp',
    templateUrl: './otp.page.html',
    styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

    @ViewChild('verifyBtn', {static: false}) verifyBtn;
    @ViewChild('resentMessage', {static: false}) resentMessage;

    constructor(
        private globalService: GlobalService
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.globalService.addAnimation(this.verifyBtn, 0, 1000, 'animated flipInX');
        this.globalService.addAnimation(this.resentMessage, 0, 1000, 'animated slideInUp');
    }

}
