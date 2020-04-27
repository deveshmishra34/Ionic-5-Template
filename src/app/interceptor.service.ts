import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalService} from './providers/global-service/global.service';
import {finalize, tap} from 'rxjs/operators';
import {StorageService} from './providers/storage/storage.service';
import {Router} from '@angular/router';
import {Platform} from '@ionic/angular';
import {AuthService} from './providers/auth-service/auth-service.service';
import {ShowErrorService} from './providers/show-error/show-error.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    authToken: string;

    constructor(
        private globalService: GlobalService,
        private storageService: StorageService,
        private showErrorService: ShowErrorService,
        private authService: AuthService,
        private router: Router,
        private platform: Platform
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.authToken = this.globalService.accessToken;

        const started = Date.now();
        let ok: string;

        const authReq = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.authToken,
                'Client-Type': (this.platform.is('cordova')) ? 'MOBILE' : 'WEB'
            }
        });

        return next.handle(authReq).pipe(
            tap(
                // Succeeds when there is a response; ignore other events
                event => ok = event instanceof HttpResponse ? 'succeeded' : '',
                // Operation failed; error is an HttpErrorResponse
                error => {
                    ok = error.status + 'failed';
                    if (error.status === 401) {
                        this.logoutUser();
                        // this.globalService.logoutUser();
                    }
                }
            ),
            // Log when response observable either completes or errors
            finalize(() => {
                const elapsed = Date.now() - started;
                const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
                // console.log(msg);
            })
        );
    }

    async logoutUser() {
        this.globalService.isLoggedIn = false;
        this.storageService.clear();
        this.globalService.setUserMenuDisabled(true);
        this.router.navigate(['/login']);
        const deviceId = await this.storageService.getDeviceId();
        if (deviceId) {
            try {
                await this.authService.logoutUser(deviceId).toPromise();
            } catch (e) {
                this.showErrorService.showError(e);
            }
        }
    }

}
