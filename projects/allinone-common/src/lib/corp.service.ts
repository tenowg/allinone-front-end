import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CorpService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getCorp(corp_id) {
    return this.http.get(this.config.config.api_server + '/corp/public/' + corp_id);
  }
}
