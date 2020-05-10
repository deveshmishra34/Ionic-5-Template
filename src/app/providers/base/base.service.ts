import {from} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';
import {handleError} from '../error-handler/error-handler.service';

export class BaseService {

    storageService;
    httpClient;

    constructor(storageService, httpClient) {
        this.storageService = storageService;
        this.httpClient = httpClient;
    }

    overdueRequest(url, requestType, data) {
        return from(new Promise(resolve => resolve(true))).pipe(
            tap(
                () => {
                    this.setLocalOverdueRequest(url, requestType, data);
                }
            )
        );
    }

    async setLocalOverdueRequest(url, requestType, data) {
        const requests = await this.storageService.getOverdueRequest();
        let requestsArr = [];
        if (requests) {
            requestsArr = requests.map(el => el);
        }
     //   console.log('requestsArr: ', requestsArr);
        requestsArr.push({
            url: url,
            data: data,
            requestType: requestType
        });
        this.storageService.setOverdueRequest(requestsArr);
    }

    getFromLocal(url) {
        return from(this.storageService.getData(url)).pipe(
            tap(
                () => {
                    this.setFromServer(url);
                }
            )
        );
    }
    getFromServer(url) {
        return this.httpClient.get(url).pipe(
            retry(1),
            catchError(handleError),
            tap(
                res => {
                    // this.storageService.setData(url, res);
                    this.setStorageValue(url, res);
                    // console.log('Response in tap: ', res);
                },
                err => {
                    //  console.log('Err in tap: ', err);
                }
            )
        );
    }

    setFromServer(url) {
        this.httpClient.get(url).subscribe(
            res => {
                this.setStorageValue(url, res);
                //   console.log('Response in ajax: ', res);
            }
        );
    }


    setStorageValue(url, data) {
        this.storageService.setData(url, data);
    }

    isHasValue(url) {
        const data = this.storageService.getLocalData(url);
        return !!data;
    }

    isEmpty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
}
