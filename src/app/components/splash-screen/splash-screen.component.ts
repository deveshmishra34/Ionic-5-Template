import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {
    private showSplash: boolean;

    constructor() {
        this.showSplash = true;
    }

    ngOnInit() {
    }

    showSplashScreen() {
        this.showSplash = true;
    }

    hideSplashScreen() {
        this.showSplash = false;
    }

}
