import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getMainMenu() {
    return this.http.get(this.config.config.api_server + '/menu/main');
  }
}
