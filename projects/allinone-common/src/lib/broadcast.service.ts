import { Injectable } from '@angular/core';
import { EchoService } from './lib.service';
import { Subscription, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BroadcastService {
  connected$: Subscription;

  // events
  permission_changed$: Observable<boolean>;

  constructor(public echo: EchoService) { }

  load(): Promise<BroadcastService> {
    return new Promise<BroadcastService>((resolve) => {
      this.connected$ = this.echo.connectionState.subscribe(val => {
        if (val) {
          console.log('Connected To Echo Server');
        } else {
          console.log('Not Connected To Echo Server');
        }
      });
      resolve(this);
    });
  }
}
