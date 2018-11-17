import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { map, concatMap, catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AuthRoles } from './models/auth-roles';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private config: ConfigService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      const url: string = state.url;
      const data = next.data as AuthRoles;
      let param = null;

      if (data && data.param) {
        param = next.paramMap.get(data.param);
      }
      return this.checkLogin(url, data, param);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(route, state);
  }

  checkLogin(url: string, data: AuthRoles, param?: string): Observable<boolean> {
    this.authService.redirectUrl = url;
    return of(this.authService.isAuthenticated()).pipe(
      concatMap(val => {
        if (val) {
          if (data && data.check_url) {
            return this.checkServer(data.check_url, param ? param : '').pipe(
              concatMap(val2 => {
                if (!val2) {
                  this.router.navigate([data.redirect_path || '']);
                }
                return of(val2);
              })
            );
          }
          return of(val);
        } else {
          this.router.navigate(['/login']);
          return of(false);
        }
      }));
    }

    checkServer(uri: string, param: string) {
      return this.http.get(this.config.config.api_server + uri + param, {headers: {'X-Auth-Check': 'check'}}).pipe(
        map(ret => true),
        catchError(dof => {
          return of(false);
        })
      );
    }
}
