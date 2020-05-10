import {Component, ViewChild} from '@angular/core';
import {AppPluginService} from '../../plugins/app-plugin/app-plugin.service';

@Component({
    selector: 'app-tabs',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    @ViewChild('tabs', {static: false}) tabs;
    selectedTab: string;

    constructor(
        private appPluginService: AppPluginService
    ) {
        this.selectedTab = 'dashboard';

        appPluginService.changeTab.subscribe(async (tab) => {
            this.tabs.select(tab);
            this.selectedTab = tab;
            // const cTab = await this.tabs.getTab();
            console.log(this.tabs.tabBar.el.click());
        });
    }

    tabChange(data) {
        console.log('Selected Tab: ', data.tab);
        this.selectedTab = data.tab;
    }

}
