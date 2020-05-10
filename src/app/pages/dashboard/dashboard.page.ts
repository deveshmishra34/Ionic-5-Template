import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    slideOpts: any;
    contactNo = '8005612730';
    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            effect: 'slide',
            speed: 1000,
            autoplay: true,
            loop: true,
            updateOnWindowResize: true,
            roundLengths: true,
            watchOverflow: true,
        };

    }

    ngOnInit() {
    }
    callUs() {
    }
}
