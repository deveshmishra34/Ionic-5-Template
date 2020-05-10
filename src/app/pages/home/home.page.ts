import {Component, ViewChild} from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    @ViewChild('tabs', {static: false}) tabs;
    selectedTab: string;

    constructor() {
    }

    tabChange(data) {
        console.log('Selected Tab: ', data.tab);
        this.selectedTab = data.tab.split(';')[0];
    }

}
