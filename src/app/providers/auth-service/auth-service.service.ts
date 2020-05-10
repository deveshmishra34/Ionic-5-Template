import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppUrlService} from '../../constants/app-url-service/app-url-service.service';
import {catchError, retry} from 'rxjs/operators';
import {handleError} from '../error-handler/error-handler.service';
import {BaseService} from '../base/base.service';
import {StorageService} from '../storage/storage.service';
import {GlobalService} from '../global-service/global.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends BaseService {
    constructor(
        public httpClient: HttpClient,
        private appUrl: AppUrlService,
        public storageService: StorageService,
        private globalService: GlobalService
    ) {
        super(storageService, httpClient);
    }

    self(query?) {
        let url = this.appUrl.SELF;

        if (!this.isEmpty(query)) {
            url = url + '?';
            for (const key in query) {
                if (query.hasOwnProperty(key)) {
                    url += key + '=' + query[key] + '&';
                }
            }
            url = url.substr(0, url.length - 1);
        }

        if (this.isHasValue(url) && this.globalService.isOfflineMode) {
            return this.getFromLocal(url);
        } else {
            return this.getFromServer(url);
        }
    }

    logoutUser(deviceId: string) {
        const data = {deviceId};
        return this.httpClient.post(this.appUrl.LOGOUT, data).pipe(
            retry(1),
            catchError(handleError)
        );
    }


}
