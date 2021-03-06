import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppUrlService {

    constructor() {
    }

    public get APP_URL_V1() {
        return environment.BASE_URL_V1;
    }

    public get APP_URL_V2() {
        return environment.BASE_URL_V2;
    }

    public get YOUTUBE_URL() {
        return 'https://www.googleapis.com/youtube/v3/';
    }

    public get GOOGLE_URL() {
        return 'https://www.googleapis.com/';
    }

    public get SELF() {
        return this.APP_URL_V1 + `users/self`;
    }

    public get LOGIN() {
        return this.APP_URL_V1 + 'oauth/token';
    }

    public get LOGOUT() {
        return this.APP_URL_V1 + 'oauth/logout';
    }
}
