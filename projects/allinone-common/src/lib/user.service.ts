import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EchoService } from './lib.service';
import { ConfigService } from './config.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: any;
  user: any;

  constructor(private http: HttpClient, private echo: EchoService, private auth: AuthService, private config: ConfigService) {
    this.user$ = auth.isLoggedIn.subscribe(val => {
      if (val) {
        // setup user object specific Echo Channels
        // get the initial user object
        http.get(this.config.config.api_server + '/user/current').subscribe(user => {
          this.user = user;
      });
      } else {
        // clear the user and unsubscribe to channels
        this.user = undefined;
      }
    });
  }

  getUsers() {
    return this.http.get(this.config.config.api_server + '/user/all');
  }
}
