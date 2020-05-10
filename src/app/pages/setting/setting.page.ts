import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../providers/global-service/global.service';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.page.html',
    styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

    constructor(
        private globalService: GlobalService
    ) {
    }

    ngOnInit() {
    }

    logout() {
        this.globalService.logout();
    }

}
