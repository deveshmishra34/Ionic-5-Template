import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanLoad, Route} from '@angular/router';
import {Observable} from 'rxjs';
import {GlobalService} from '../providers/global-service/global.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardsGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private globalService: GlobalService,
        private router: Router
    ) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.checkLogin(state.url);
    }

    canLoad(route: Route): boolean {

        return this.checkLogin(`/${route.path}`);
    }


    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(next, state);
    }

    checkLogin(url: string): boolean {

        if (this.globalService.isLoggedIn) {
            return true;
        }

        this.globalService.redirectUrl = url;


        this.router.navigate(['/login']);
        return false;
    }
}
