import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    slideOpts: any;

    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }

    ngOnInit() {
    }

}
