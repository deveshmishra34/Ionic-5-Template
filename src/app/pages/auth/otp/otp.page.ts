import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from '../../../providers/global-service/global.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-otp',
    templateUrl: './otp.page.html',
    styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
    @ViewChild('verifyBtn', {static: false}) verifyBtn;
    @ViewChild('resentMessage', {static: false}) resentMessage;
    defaultHref: string;
    constructor(
        private globalService: GlobalService,
        private router: Router
    ) {
        this.defaultHref = 'auth/login';
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.globalService.addAnimation(this.verifyBtn, 0, 1000, 'animated flipInX');
        this.globalService.addAnimation(this.resentMessage, 0, 1000, 'animated slideInUp');
    }

    resendOTP() {

    }

    verifyOtp() {
        this.globalService.setAccessToken('1234567890');
        this.router.navigate(['/home/dashboard']);
    }

}
