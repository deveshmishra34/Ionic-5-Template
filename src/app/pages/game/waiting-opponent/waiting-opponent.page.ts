import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalService} from '../../../providers/global-service/global.service';

@Component({
    selector: 'app-waiting-opponent',
    templateUrl: './waiting-opponent.page.html',
    styleUrls: ['./waiting-opponent.page.scss'],
})
export class WaitingOpponentPage implements OnInit {

    @ViewChild('contestTimer', {static: false}) contestTimer;
    @ViewChild('opo1', {static: false}) opo1;
    @ViewChild('vs', {static: false}) vs;
    @ViewChild('opo2', {static: false}) opo2;

    constructor(
        private globalService: GlobalService
    ) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.globalService.addAnimation(this.contestTimer, 0, 1000, 'animated slideInDown');
        this.globalService.addAnimation(this.opo1, 0, 1000, 'animated slideInLeft');
        this.globalService.addAnimation(this.vs, 0, 1000, 'animated flipInX');
        this.globalService.addAnimation(this.opo2, 0, 1000, 'animated slideInRight');
    }

    ionViewWillLeave() {
        this.globalService.addAnimation(this.contestTimer, 0, 1000, 'animated slideOutUp');
        this.globalService.addAnimation(this.opo1, 0, 1000, 'animated slideOutLeft');
        // this.globalService.addAnimation(this.vs, 0, 1000, 'animated flipInX');
        this.globalService.addAnimation(this.opo2, 0, 1000, 'animated slideOutRight');
    }

}
