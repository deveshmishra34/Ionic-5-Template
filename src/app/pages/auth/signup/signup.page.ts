import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from '../../../providers/global-service/global.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

    @ViewChild('mobileIcon', {static: false}) mobileIcon;
    @ViewChild('userIcon', {static: false}) userIcon;
    @ViewChild('signupBtn', {static: false}) signupBtn;
    defaultHref: string;
    constructor(
        private globalService: GlobalService
    ) {
        this.defaultHref = 'auth/login';
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.globalService.addAnimation(this.mobileIcon, 0, 1000, 'animated slideInRight');
        this.globalService.addAnimation(this.userIcon, 0, 1000, 'animated slideInRight');
        this.globalService.addAnimation(this.signupBtn, 0, 1000, 'animated flipInX');
    }

}
