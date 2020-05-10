import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.page.html',
    styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {
    slideOpts: any;

    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }

    ngOnInit() {
    }

    nextSlide() {

    }

}
