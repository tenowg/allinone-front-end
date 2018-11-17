import { Injectable } from '@angular/core';
import { AppConfig } from './models/Config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config: AppConfig;

  constructor() { }

  getConfig() {
    return this.config;
  }

  load(environment): Promise<ConfigService> {
    const promise = new Promise<ConfigService>((resolve) => {
      resolve(this);
    });
    promise.then((env) => this.config = environment);
    return promise;
  }
}
