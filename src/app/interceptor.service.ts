import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalService} from './providers/global-service/global.service';
import {finalize, tap} from 'rxjs/operators';
import {StorageService} from './providers/storage/storage.service';
import {AuthService} from './providers/auth-service/auth-service.service';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    authToken: string;
    platForm: any;
    cfPlatforms: any;
    constructor(
        private _globalService: GlobalService,
        private _storageService: StorageService,
        private authService: AuthService,
        private router: Router,
        private platform: Platform
    ) {
        this.platForm = this.platform;
        this.cfPlatforms = this._globalService.currentPlatform;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.authToken = this._globalService.accessToken;

        const started = Date.now();
        let ok: string;

        const authReq = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.authToken,
                'Client-Type': (this.platform.is('cordova')) ? 'MOBILE' : 'WEB'
            }
        });


        // const intervalTimeout = setInterval(() => {
        //     const timeTaken = (Date.now() - started) / 1000;
        //     if (timeTaken > 2) {
        //         this.loaderService.loadData('Please wait...');
        //         clearInterval(intervalTimeout);
        //     }
        //     console.log('Interceptor interval');
        // }, 100);

        return next.handle(authReq).pipe(
            tap(
                // Succeeds when there is a response; ignore other events
                event => ok = event instanceof HttpResponse ? 'succeeded' : '',
                // Operation failed; error is an HttpErrorResponse
                error => {
                    ok = error.status + 'failed';
                    if (error.status === 401) {
                        this.logoutUser();
                        // this._globalService.logoutUser();
                    }
                }
            ),
            // Log when response observable either completes or errors
            finalize(() => {
                const elapsed = Date.now() - started;
                const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
                // console.log(msg);
                // this.loaderService.unloadData('Please wait...');
                // if (intervalTimeout) {
                //     clearInterval(intervalTimeout);
                // }
            })
        );
    }

    logoutUser() {
        this._storageService.getDeviceId().then(
            deviceId => {
                this._globalService.isLoggedIn = false;
                this._storageService.clear();
                this._globalService.setUserMenuDisabled(true);
                if ((this.cfPlatforms.indexOf('cordova') > -1)) {
                    this.router.navigate(['/intro']);
                } else {
                    this.router.navigate(['/landing-page']);
                }
                if (deviceId) {
                    this.authService.logoutUser(deviceId).subscribe();
                }
            }
        );
    }

}
