import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CharService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getCharacter(char_id: number) {
    return this.http.get(this.config.config.api_server + '/character/public/' + char_id);
  }

  getProfile(char_id: number) {
    return this.http.get(this.config.config.api_server + '/character/profile/' + char_id);
  }

  getNotifications(char_id: number) {
    return this.http.get(this.config.config.api_server + '/character/notifications/' + char_id);
  }

  postNotificationRead(char_id: number, note_id: number) {

  }
}
