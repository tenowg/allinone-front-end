import { Injectable } from '@angular/core';

import { BehaviorSubject, Subscription, interval, of, EMPTY } from 'rxjs';
import { EchoService } from './lib.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { concatMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  echo_login$: Subscription;
  check_auth$: any;
  window_handle: any;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public echo: EchoService,
              public router: Router,
              public jwt: JwtHelperService,
              private http: HttpClient,
              private config: ConfigService
              ) {
    this.echo_login$ = this.isLoggedIn.subscribe(val => {
      if (val) {
        this.echo.login({'Authorization': 'Bearer ' + this.getToken()}, this.getUser());
      } else {
        this.echo.logout();
      }
    });

    if (this.isAuthenticated()) {
      this.isLoggedIn.next(true);
    } else {
      const token = this.getToken();
      if (token) {
        this.refreshToken();
      }
    }

    this.check_auth$ = interval(26000).pipe(
      concatMap(val => {
        return of(this.isAuthenticated());
      }),
      concatMap(val => {
        if (val) {
          const now = new Date();
          const expire = this.jwt.getTokenExpirationDate(this.getToken());
          const dif = Math.round((expire.valueOf() - now.valueOf()) / 1000);
          if (dif < 500) {
            return this.refreshToken();
          }
          // console.log(this.jwt.getTokenExpirationDate(this.getToken()), Math.round(dif));
          return EMPTY;
        }
        return this.refreshToken();
      })
    ).subscribe(token => {
      this.setToken(token);
      this.isLoggedIn.next(true);
      // console.log(token);
    });
  }

  refreshToken() {
    return this.http.get(this.config.config.api_server + '/auth/refresh', { observe: 'body', responseType: 'text' }).pipe(
      concatMap(token => {
        return of(token);
      }),
      catchError(err => {
        if (!this.window_handle) {
          if (this.getToken()) {
            this.login(false);
          }
        }
        return EMPTY;
      })
    );
  }

  getToken() {
    return sessionStorage.getItem('access_token');
  }

  setToken(token: string) {
    return sessionStorage.setItem('access_token', token);
  }

  removeToken() {
    sessionStorage.removeItem('access_token');
  }

  removeUser() {
    sessionStorage.removeItem('access_user');
  }

  getUser() {
    return sessionStorage.getItem('access_user');
  }

  setUser(user) {
    return sessionStorage.setItem('access_user', user);
  }

  isAuthenticated(): boolean {
    return !this.jwt.isTokenExpired(this.getToken());
  }

  login(do_redirect = true) {
    const handler = function(e) {
      if (e.isTrusted && e.data && e.data.type && e.data.type === 'jwt') {
        this.setToken(e.data.token);
        this.setUser(e.data.user);
        window.removeEventListener('message', handler.bind(this), false);
        this.window_handle = undefined;
        this.isLoggedIn.next(true);
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        if (do_redirect) {
          const redirect = this.redirectUrl ? this.redirectUrl : '/';
          this.redirectUrl = undefined;
          this.router.navigate([redirect]);
        }
      }
    };

    window.addEventListener('message', handler.bind(this), false);
    this.window_handle = window.open(this.config.config.web_server + '/eve/login', '_blank', 'width=700,height=500,left=200,top=100');
  }

  logout(): void {
    // Clear the tokens
    this.removeToken();
    this.removeUser();

    // log the user out...
    this.isLoggedIn.next(false);
  }
}
