import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from '../../../providers/global-service/global.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    @ViewChild('logo', {static: false}) logo;
    @ViewChild('mobileIcon', {static: false}) mobileIcon;

    constructor(
        private globalService: GlobalService
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.globalService.addAnimation(this.logo, 0, 1000, 'animated slideInDown');
        this.globalService.addAnimation(this.mobileIcon, 0, 1000, 'animated slideInRight');
    }

    ionViewWillLeave() {
        console.log('ionViewWillLeave');
        this.globalService.addAnimation(this.logo, 0, 1000, 'animated slideOutUp');
        this.globalService.addAnimation(this.mobileIcon, 0, 1000, 'animated slideOutRight');
    }

}
